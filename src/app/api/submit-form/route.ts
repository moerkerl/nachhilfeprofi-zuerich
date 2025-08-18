import { NextRequest, NextResponse } from 'next/server'
import { validateCSRFFromHeaders } from '@/lib/csrf'
import { hubspotService, type PortalFormData } from '@/lib/hubspotService'
// import { getStoredTrackingParams } from '@/lib/tracking'

/**
 * API Route: POST /api/submit-form
 * Handles form submissions from the multi-step form
 */
export async function POST(request: NextRequest) {
  try {
    // Validate CSRF token
    if (!validateCSRFFromHeaders(request.headers)) {
      console.warn('Form submission blocked: Invalid CSRF token')
      return NextResponse.json(
        { error: 'Invalid CSRF token' },
        { status: 403 }
      )
    }

    // Parse request body
    let formData: PortalFormData
    try {
      formData = await request.json()
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON data' },
        { status: 400 }
      )
    }

    // Validate required fields
    const requiredFields = ['schueler', 'klasse', 'fach', 'plz', 'nachname', 'telefon', 'email']
    const missingFields = requiredFields.filter(field => !formData[field as keyof PortalFormData])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Missing required fields', missingFields },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Basic phone validation (Swiss format)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,}$/
    if (!phoneRegex.test(formData.telefon)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      )
    }

    // Add tracking parameters if available
    // Note: In a real implementation, you might pass tracking data from the client
    // For now, we'll add basic tracking info
    const enhancedFormData: PortalFormData = {
      ...formData,
      utm_source: formData.utm_source || 'website',
      utm_medium: formData.utm_medium || 'form',
      utm_campaign: formData.utm_campaign || 'nachhilfeprofi-zuerich'
    }

    console.log('Processing form submission for:', formData.email)

    // Submit to HubSpot
    const hubspotResponse = await hubspotService.createOrUpdateContact(enhancedFormData)

    if (!hubspotResponse.success) {
      console.error('HubSpot submission failed:', hubspotResponse.error)
      
      // Don't expose HubSpot errors to client for security
      // But log them for debugging
      if (hubspotResponse.errorType === 'api_error' && hubspotResponse.statusCode) {
        console.error('HubSpot API Error Details:', {
          status: hubspotResponse.statusCode,
          error: hubspotResponse.error,
          data: hubspotResponse.data
        })
      }
      
      // Return success to user even if HubSpot fails (better UX)
      // In production, you might want to queue this for retry
      console.warn('Returning success despite HubSpot failure for better UX')
    } else {
      console.log('HubSpot contact created/updated:', hubspotResponse.contactId)
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      contactId: hubspotResponse.contactId,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Form submission error:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Form submission failed. Please try again.'
      },
      { status: 500 }
    )
  }
}

/**
 * Only POST method is allowed for this endpoint
 */
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}