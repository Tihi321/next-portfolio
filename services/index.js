
import { Client } from '../api/client';


const api = 'http://wordpress_blog_server:80/wp-json/portfolio-backend/v1/portfolio-page';

const __API_CLIENT__ = '__TIHOMIR_SELAK_NEXT_JS_PORTFOLIO__';

export function getOrCreateClient() {

  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return new Client(api);
  }

  // This will be true when page constructor is called on client
  if (!window[__API_CLIENT__]) {
    window[__API_CLIENT__] = new Client(api);
  }

  return window[__API_CLIENT__];
}