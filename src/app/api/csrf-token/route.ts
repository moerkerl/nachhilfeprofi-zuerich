import { NextRequest, NextResponse } from 'next/server'
import { createCSRFToken } from '@/lib/csrf'

/**
 * API Route: GET /api/csrf-token
 * Returns a CSRF token for form submissions
 */
export async function GET(request: NextRequest) {
  try {
    // Check if CSRF_SECRET is configured
    if (!process.env.CSRF_SECRET) {
      console.error('CSRF_SECRET environment variable is not set')
      return NextResponse.json(
        { error: 'CSRF protection not configured' },
        { status: 500 }
      )
    }

    // Generate CSRF token
    const token = createCSRFToken()
    
    // Log for debugging (remove in production)
    console.log('CSRF token generated for request from:', request.headers.get('origin') || 'unknown')
    
    return NextResponse.json({ 
      token,
      expires: Date.now() + (60 * 60 * 1000) // 1 hour from now
    })
    
  } catch (error) {
    console.error('CSRF token generation failed:', error)
    return NextResponse.json(
      { error: 'Failed to generate CSRF token' },
      { status: 500 }
    )
  }
}

/**
 * Only GET method is allowed for this endpoint
 */
export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}