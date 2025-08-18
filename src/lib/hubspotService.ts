/**
 * HubSpot Service for Nachhilfeprofi Zürich
 * Handles all HubSpot API interactions for contact management.
 */

interface HubSpotContactData {
  email: string;
  lastname: string;
  phone: string;
  plz: string;
  funktion?: string;
  kontakt_hat_lead_formular_ausgefullt?: string;
  was_fur_nachhilfe_benotigt_ihr_sohn_?: string;
  sucht_nachhilfe_fur?: string;
  schulstufe_kind?: string;
  utm_website_contact?: string;
  // Tracking parameters - HubSpot specific fields
  hs_google_click_id?: string;
  utm_campaign_contact?: string;
  utm_source_contact?: string;
}

interface HubSpotAPIResponse {
  success: boolean;
  contactId?: string;
  error?: string;
  errorType?: string;
  statusCode?: number;
  data?: unknown;
}

interface PortalFormData {
  schueler: string;
  klasse: string;
  fach: string;
  plz: string;
  nachname: string;
  telefon: string;
  email: string;
  // Tracking parameters
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  trackingParams?: Record<string, string>;
}

class HubSpotService {
  private static instance: HubSpotService;
  private readonly baseUrl = 'https://api.hubapi.com';
  private readonly accessToken: string;
  
  // Rate limiting properties
  private lastRequestTime = 0;
  private readonly minRequestInterval = 150; // 150ms = max 6.6 req/sec

  private constructor() {
    this.accessToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN || '';
    
    if (!this.accessToken) {
      console.warn('HUBSPOT_PRIVATE_APP_TOKEN environment variable is not set');
    }
  }

  public static getInstance(): HubSpotService {
    if (!HubSpotService.instance) {
      HubSpotService.instance = new HubSpotService();
    }
    return HubSpotService.instance;
  }

  /**
   * Throttle requests to stay within HubSpot API rate limits
   */
  private async throttleRequest(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    
    if (timeSinceLastRequest < this.minRequestInterval) {
      const waitTime = this.minRequestInterval - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.lastRequestTime = Date.now();
  }

  /**
   * Make authenticated request to HubSpot API
   */
  private async makeRequest(endpoint: string, options: RequestInit): Promise<Response> {
    if (!this.accessToken) {
      throw new Error('HubSpot access token is not configured');
    }

    await this.throttleRequest();

    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    return response;
  }

  /**
   * Transform form data to HubSpot contact properties format
   */
  private transformFormDataToHubSpot(formData: PortalFormData): HubSpotContactData {
    const hubspotData: HubSpotContactData = {
      email: formData.email,
      lastname: formData.nachname,
      phone: formData.telefon,
      plz: formData.plz,
      funktion: 'Kunde / Schüler',
      kontakt_hat_lead_formular_ausgefullt: 'Ja',
      was_fur_nachhilfe_benotigt_ihr_sohn_: formData.fach,
      sucht_nachhilfe_fur: this.mapWerBrauchtNachhilfe(formData.schueler),
      schulstufe_kind: formData.klasse,
      utm_website_contact: 'nachhilfeprofi-zuerich.ch',
    };

    // Add only the specific HubSpot tracking fields if they exist
    if (formData.gclid) {
      hubspotData.hs_google_click_id = formData.gclid;
    }
    
    if (formData.utm_campaign) {
      hubspotData.utm_campaign_contact = formData.utm_campaign;
    }
    
    if (formData.utm_source) {
      hubspotData.utm_source_contact = formData.utm_source;
    }

    return hubspotData;
  }

  /**
   * Map schueler field to HubSpot format
   */
  private mapWerBrauchtNachhilfe(schueler: string): string {
    const mappings: Record<string, string> = {
      'meine-tochter': 'Meine Tochter',
      'mein-sohn': 'Mein Sohn',
      'ich': 'Ich',
      'jemand-anderes': 'Jemand anderes',
    };
    
    return mappings[schueler] || 'Jemand anderes';
  }

  /**
   * Create or update contact in HubSpot
   */
  public async createOrUpdateContact(formData: PortalFormData): Promise<HubSpotAPIResponse> {
    try {
      const contactData = this.transformFormDataToHubSpot(formData);
      
      // Prepare properties in HubSpot format
      const properties = Object.entries(contactData)
        .filter(([, value]) => value !== undefined && value !== null)
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {} as Record<string, unknown>);

      console.log('Creating/updating HubSpot contact:', { email: contactData.email, properties });

      // First, try to find existing contact by email
      let existingContactId: string | null = null;
      try {
        const searchResponse = await this.makeRequest(`/crm/v3/objects/contacts/search`, {
          method: 'POST',
          body: JSON.stringify({
            filterGroups: [{
              filters: [{
                value: contactData.email,
                propertyName: 'email',
                operator: 'EQ'
              }]
            }],
            properties: ['id', 'email']
          })
        });

        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          if (searchData.results && searchData.results.length > 0) {
            existingContactId = searchData.results[0].id;
            console.log('Found existing contact:', existingContactId);
          }
        }
      } catch (searchError) {
        console.warn('Contact search failed, proceeding with create:', searchError);
      }

      let response: Response;
      let contactId: string = '';

      if (existingContactId) {
        // Update existing contact
        contactId = existingContactId;
        response = await this.makeRequest(`/crm/v3/objects/contacts/${existingContactId}`, {
          method: 'PATCH',
          body: JSON.stringify({ properties })
        });
      } else {
        // Create new contact
        response = await this.makeRequest('/crm/v3/objects/contacts', {
          method: 'POST',
          body: JSON.stringify({ properties })
        });
      }

      if (response.ok) {
        const responseData = await response.json();
        if (!existingContactId) {
          contactId = responseData.id;
        }
        
        console.log('HubSpot contact operation successful:', { 
          contactId, 
          operation: existingContactId ? 'updated' : 'created' 
        });

        return {
          success: true,
          contactId,
          data: responseData
        };
      } else {
        const errorData = await response.json();
        console.error('HubSpot API error:', response.status, errorData);
        
        return {
          success: false,
          error: errorData.message || 'HubSpot API error',
          errorType: 'api_error',
          statusCode: response.status,
          data: errorData
        };
      }
    } catch (error) {
      console.error('HubSpot service error:', error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        errorType: 'service_error'
      };
    }
  }

  /**
   * Test HubSpot connection and API access
   */
  public async testConnection(): Promise<boolean> {
    try {
      const response = await this.makeRequest('/crm/v3/objects/contacts?limit=1', {
        method: 'GET'
      });
      
      return response.ok;
    } catch (error) {
      console.error('HubSpot connection test failed:', error);
      return false;
    }
  }
}

// Export singleton instance
export const hubspotService = HubSpotService.getInstance();
export type { PortalFormData, HubSpotAPIResponse };