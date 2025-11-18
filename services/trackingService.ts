/**
 * Tracking Service
 * Handles all analytics and tracking to Flask backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface SessionData {
  page: string;
  source?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  referrer?: string;
}

interface EventData {
  session_id: string;
  event_type: string;
  event_name?: string;
  element_id?: string;
  element_class?: string;
  element_text?: string;
  page_url?: string;
  metadata?: Record<string, any>;
}

interface UserDetailsData {
  session_id: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  form_type: string;
  metadata?: Record<string, any>;
}

class TrackingService {
  private sessionId: string | null = null;

  /**
   * Initialize session and store session ID
   */
  async createSession(data: SessionData): Promise<string | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/session/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          referrer: typeof window !== 'undefined' ? document.referrer : '',
        }),
      });

      const result = await response.json();

      if (result.success && result.session_id) {
        this.sessionId = result.session_id;
        // Store in localStorage for persistence
        if (typeof window !== 'undefined') {
          localStorage.setItem('tracking_session_id', result.session_id);
        }
        console.log('Session created:', result.session_id);
        return result.session_id;
      }

      return null;
    } catch (error) {
      console.error('Error creating session:', error);
      return null;
    }
  }

  /**
   * Get current session ID
   */
  getSessionId(): string | null {
    if (this.sessionId) {
      return this.sessionId;
    }

    // Try to get from localStorage
    if (typeof window !== 'undefined') {
      this.sessionId = localStorage.getItem('tracking_session_id');
      return this.sessionId;
    }

    return null;
  }

  /**
   * Track an event
   */
  async trackEvent(data: Omit<EventData, 'session_id'>): Promise<boolean> {
    const sessionId = this.getSessionId();

    if (!sessionId) {
      console.warn('No session ID available for tracking event');
      return false;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/event/track`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          ...data,
          page_url: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error('Error tracking event:', error);
      return false;
    }
  }

  /**
   * Track button click
   */
  async trackClick(
    eventName: string,
    elementId?: string,
    elementText?: string,
    metadata?: Record<string, any>
  ): Promise<boolean> {
    return this.trackEvent({
      event_type: 'click',
      event_name: eventName,
      element_id: elementId,
      element_text: elementText,
      metadata,
    });
  }

  /**
   * Track WhatsApp CTA click
   */
  async trackWhatsAppClick(buttonLocation: string, buttonText: string): Promise<boolean> {
    return this.trackEvent({
      event_type: 'whatsapp_click',
      event_name: 'whatsapp_cta_click',
      element_text: buttonText,
      metadata: {
        location: buttonLocation,
      },
    });
  }

  /**
   * Track page view
   */
  async trackPageView(page: string): Promise<boolean> {
    return this.trackEvent({
      event_type: 'view',
      event_name: 'page_view',
      metadata: {
        page,
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Track scroll depth
   */
  async trackScroll(depth: number): Promise<boolean> {
    return this.trackEvent({
      event_type: 'scroll',
      event_name: 'scroll_depth',
      metadata: {
        depth_percentage: depth,
      },
    });
  }

  /**
   * Track exit intent
   */
  async trackExitIntent(): Promise<boolean> {
    return this.trackEvent({
      event_type: 'exit_intent',
      event_name: 'exit_intent_triggered',
      metadata: {
        timestamp: new Date().toISOString(),
      },
    });
  }

  /**
   * Submit user details
   */
  async submitUserDetails(data: Omit<UserDetailsData, 'session_id'>): Promise<boolean> {
    const sessionId = this.getSessionId();

    if (!sessionId) {
      console.warn('No session ID available for submitting user details');
      return false;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/user-details/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Track form submission event
        await this.trackEvent({
          event_type: 'form_submit',
          event_name: `${data.form_type}_submitted`,
          metadata: {
            form_type: data.form_type,
            has_email: !!data.email,
            has_phone: !!data.phone,
          },
        });
      }

      return result.success;
    } catch (error) {
      console.error('Error submitting user details:', error);
      return false;
    }
  }
}

// Export singleton instance
export const trackingService = new TrackingService();
export default trackingService;
