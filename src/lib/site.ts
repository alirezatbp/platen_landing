/**
 * Public site config (Astro PUBLIC_* env vars).
 * See `.env.example`.
 */
export const siteConfig = {
  name: 'Platen',
  domain: 'getplaten.com',
  tagline: 'Digital menus for restaurants worldwide',
  defaultDescription:
    'Build a QR digital menu in minutes. Free forever for one venue — share with guests, no app required.',
  get panelUrl() {
    return import.meta.env.PUBLIC_PANEL_URL || 'http://localhost:2081';
  },
  get apiBaseUrl() {
    return import.meta.env.PUBLIC_API_BASE_URL || 'http://localhost:2080/api';
  },
} as const;
