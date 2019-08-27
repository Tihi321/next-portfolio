import { Client } from './client';

const __API_CLIENT__ = 'client';

export function getOrCreateClient(snapshot) {
  // Always make a new store if server, otherwise state is shared between requests

  if (typeof window === 'undefined') {
    return new Client(snapshot);
  }

  // This will be true when page constructor is called on client
  if (!window[__API_CLIENT__]) {
    window[__API_CLIENT__] = new Client(snapshot);
  }

  return window[__API_CLIENT__];
}