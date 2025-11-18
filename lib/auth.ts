/**
 * Simple Authentication Utility
 * For production, consider using NextAuth.js or similar
 */

export interface AdminUser {
  username: string;
  isAuthenticated: boolean;
}

const ADMIN_CREDENTIALS = {
  username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin',
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'
};

/**
 * Validates admin credentials
 */
export function validateCredentials(username: string, password: string): boolean {
  return (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  );
}

/**
 * Stores auth session in localStorage
 */
export function storeAuthSession(username: string): void {
  if (typeof window !== 'undefined') {
    const session = {
      username,
      timestamp: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };
    localStorage.setItem('admin_session', JSON.stringify(session));
  }
}

/**
 * Gets stored auth session
 */
export function getAuthSession(): AdminUser | null {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem('admin_session');
      if (!stored) return null;

      const session = JSON.parse(stored);
      const expiresAt = new Date(session.expiresAt);

      // Check if expired
      if (expiresAt < new Date()) {
        clearAuthSession();
        return null;
      }

      return {
        username: session.username,
        isAuthenticated: true
      };
    } catch (error) {
      console.error('Error retrieving auth session:', error);
      return null;
    }
  }
  return null;
}

/**
 * Clears auth session (logout)
 */
export function clearAuthSession(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_session');
  }
}

/**
 * Checks if user is authenticated
 */
export function isAuthenticated(): boolean {
  const session = getAuthSession();
  return session !== null && session.isAuthenticated;
}
