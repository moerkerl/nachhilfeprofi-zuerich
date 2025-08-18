/**
 * Tracking utilities for Nachhilfeprofi Zürich
 * Handles UTM parameters, Google Click IDs, and landing page tracking
 */

interface TrackingParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
}

interface StoredTrackingData {
  params: TrackingParams;
  timestamp: number;
  landingPage: string;
  referrer: string;
}

/**
 * Initialize tracking on page load
 * Called from GoogleAnalytics component after gtag is loaded
 */
export function initializeTracking(): void {
  if (typeof window === 'undefined') return;
  
  try {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const trackingParams: TrackingParams = {};
    
    // Extract UTM parameters
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    utmParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        trackingParams[param as keyof TrackingParams] = value;
      }
    });
    
    // Extract Google Click ID
    const gclid = urlParams.get('gclid');
    if (gclid) {
      trackingParams.gclid = gclid;
    }
    
    // Only store if we have tracking parameters
    if (Object.keys(trackingParams).length > 0) {
      const trackingData: StoredTrackingData = {
        params: trackingParams,
        timestamp: Date.now(),
        landingPage: window.location.pathname + window.location.search,
        referrer: document.referrer || 'direct'
      };
      
      // Store in sessionStorage (persists until browser tab is closed)
      sessionStorage.setItem('nachhilfeprofi_tracking', JSON.stringify(trackingData));
      
      console.log('Tracking initialized:', trackingData);
    }
    
    // Set Google Click ID for enhanced conversions
    if (gclid && typeof window.gtag === 'function') {
      window.gtag('set', { 'gclid': gclid });
    }
    
  } catch (error) {
    console.warn('Tracking initialization failed:', error);
  }
}

/**
 * Get stored tracking parameters
 * Used when submitting forms to include original traffic source
 */
export function getStoredTrackingParams(): StoredTrackingData | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = sessionStorage.getItem('nachhilfeprofi_tracking');
    if (!stored) return null;
    
    const data: StoredTrackingData = JSON.parse(stored);
    
    // Check if data is not too old (24 hours)
    if (Date.now() - data.timestamp > 24 * 60 * 60 * 1000) {
      sessionStorage.removeItem('nachhilfeprofi_tracking');
      return null;
    }
    
    return data;
  } catch (error) {
    console.warn('Failed to retrieve tracking parameters:', error);
    return null;
  }
}

/**
 * Get Google Click ID from current URL or stored data
 */
export function getGoogleClickId(): string | null {
  if (typeof window === 'undefined') return null;
  
  try {
    // Try current URL first
    const urlParams = new URLSearchParams(window.location.search);
    const currentGclid = urlParams.get('gclid');
    if (currentGclid) return currentGclid;
    
    // Try stored data
    const storedData = getStoredTrackingParams();
    return storedData?.params.gclid || null;
  } catch (error) {
    console.warn('Failed to get Google Click ID:', error);
    return null;
  }
}

/**
 * Track form start event
 * Call when user starts filling out the lead form
 */
export function trackFormStart(): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'form_start', {
      event_category: 'engagement',
      event_label: 'lead_form'
    });
  }
}

/**
 * Track form step completion
 * Call when user completes each step of the multi-step form
 */
export function trackFormStep(step: number, stepName: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'form_step', {
      event_category: 'engagement',
      event_label: `step_${step}_${stepName}`,
      custom_parameters: {
        step_number: step,
        step_name: stepName
      }
    });
  }
}

/**
 * Track CTA clicks
 * Call when user clicks on Call-to-Action buttons
 */
export function trackCTAClick(ctaText: string, location: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: `${location}_${ctaText}`,
      custom_parameters: {
        cta_text: ctaText,
        page_location: location
      }
    });
  }
}

// Global type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'consent' | 'set',
      targetId: string | { [key: string]: unknown },
      config?: { [key: string]: unknown }
    ) => void;
  }
}