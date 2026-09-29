// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL de production : sert au canonical, aux balises hreflang, au JSON-LD et au sitemap.
// Réglable par variable d'environnement (Netlify : SITE_URL) sans toucher au code.
const SITE_URL = process.env.SITE_URL || 'https://alex-majeau.netlify.app';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-CA', en: 'en-CA' } } }),
  ],
});
