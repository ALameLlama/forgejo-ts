/**
 * Forgejo TypeScript Client
 * 
 * Auto-generated from Forgejo API specification
 * API Version: 11.0.10
 * Generated: 2026-02-05T12:04:22.918Z
 */

// Re-export everything from the generated client
export * from './generated';

// Import OpenAPI config for the configure function
import { OpenAPI } from './generated';

// Export a convenience function to configure the client
export function configure(options: {
  baseUrl?: string;
  token?: string;
  username?: string;
  password?: string;
}): void {
  if (options.baseUrl) {
    OpenAPI.BASE = options.baseUrl.replace(/\/$/, ''); // Remove trailing slash
  }
  
  if (options.token) {
    OpenAPI.TOKEN = options.token;
  }
  
  if (options.username && options.password) {
    OpenAPI.USERNAME = options.username;
    OpenAPI.PASSWORD = options.password;
  }
}

// Export metadata about this build
export const FORGEJO_API_VERSION = '11.0.10';
export const GENERATED_AT = '2026-02-05T12:04:22.919Z';
