'use client'

import { useState, useEffect } from 'react'

interface CSRFHook {
  token: string | null
  loading: boolean
  error: string | null
}

/**
 * Custom hook to fetch and manage CSRF token
 */
export function useCSRF(): CSRFHook {
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch('/api/csrf-token', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        
        if (!response.ok) {
          throw new Error(`Failed to fetch CSRF token: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (!data.token) {
          throw new Error('No CSRF token received')
        }
        
        setToken(data.token)
      } catch (err) {
        console.error('CSRF token fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch CSRF token')
        setToken(null)
      } finally {
        setLoading(false)
      }
    }

    fetchCSRFToken()
  }, [])

  return { token, loading, error }
}

/**
 * Helper function to add CSRF token to request headers
 */
export function addCSRFHeader(headers: HeadersInit, token: string | null): HeadersInit {
  if (!token) {
    return headers;
  }
  
  return {
    ...headers,
    'X-CSRF-Token': token,
  }
}

/**
 * Helper function to create fetch options with CSRF token
 */
export function createCSRFFetchOptions(
  token: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'POST',
  body?: unknown,
  additionalHeaders: HeadersInit = {}
): RequestInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'X-CSRF-Token': token,
    ...additionalHeaders,
  }

  const options: RequestInit = {
    method,
    headers,
  }

  if (body && method !== 'GET') {
    options.body = typeof body === 'string' ? body : JSON.stringify(body)
  }

  return options
}