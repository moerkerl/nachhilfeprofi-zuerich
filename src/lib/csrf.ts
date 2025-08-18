/**
 * CSRF Protection for Nachhilfeprofi Zürich
 * Generates and validates CSRF tokens for form submissions
 */

import crypto from 'crypto'

/**
 * Generate a secure CSRF token
 */
export function generateCSRFToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

/**
 * Create HMAC signature for CSRF token validation
 */
function createSignature(token: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(token).digest('hex')
}

/**
 * Generate a signed CSRF token
 */
export function createCSRFToken(): string {
  const secret = process.env.CSRF_SECRET
  if (!secret) {
    throw new Error('CSRF_SECRET environment variable is not set')
  }
  
  const token = generateCSRFToken()
  const signature = createSignature(token, secret)
  
  // Combine token and signature
  return `${token}.${signature}`
}

/**
 * Validate a CSRF token
 */
export function validateCSRFToken(signedToken: string): boolean {
  const secret = process.env.CSRF_SECRET
  if (!secret) {
    console.error('CSRF_SECRET environment variable is not set')
    return false
  }
  
  if (!signedToken || typeof signedToken !== 'string') {
    return false
  }
  
  const parts = signedToken.split('.')
  if (parts.length !== 2) {
    return false
  }
  
  const [token, signature] = parts
  const expectedSignature = createSignature(token, secret)
  
  // Use constant-time comparison to prevent timing attacks
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  )
}

/**
 * Middleware helper to validate CSRF token from request headers
 */
export function validateCSRFFromHeaders(headers: Headers): boolean {
  const csrfToken = headers.get('x-csrf-token')
  if (!csrfToken) {
    return false
  }
  
  return validateCSRFToken(csrfToken)
}