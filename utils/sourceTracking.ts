/**
 * Source Tracking Utility
 * Captures and stores the source parameter from URL query strings
 */

export interface SourceData {
  source: string | null;
  timestamp: string;
  page: string;
}

/**
 * Extracts the source parameter from URL query string
 * Example: ?source=facebook or ?utm_source=google
 */
export function getSourceFromUrl(searchParams: URLSearchParams): string | null {
  // Check for common source parameters
  return (
    searchParams.get('source') ||
    searchParams.get('utm_source') ||
    searchParams.get('ref') ||
    searchParams.get('referrer') ||
    null
  );
}

/**
 * Stores source data in localStorage
 */
export function storeSource(sourceData: SourceData): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('landing_source', JSON.stringify(sourceData));
      // Also send to analytics or backend if needed
      console.log('Source tracked:', sourceData);
    } catch (error) {
      console.error('Failed to store source:', error);
    }
  }
}

/**
 * Retrieves stored source data
 */
export function getStoredSource(): SourceData | null {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('landing_source');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to retrieve source:', error);
      return null;
    }
  }
  return null;
}

/**
 * Appends source to WhatsApp URL
 */
export function getWhatsAppUrl(message: string, source?: string | null): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
  const baseMessage = encodeURIComponent(message);
  const sourceInfo = source ? encodeURIComponent(`\n\nSource: ${source}`) : '';
  return `https://wa.me/${phoneNumber}?text=${baseMessage}${sourceInfo}`;
}
