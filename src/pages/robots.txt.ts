import type { APIRoute } from 'astro';
import { site } from '../site.config';

// Démo : tout bloquer. Au lancement (site.indexable = true) : tout permettre + sitemap.
export const GET: APIRoute = ({ site: base }) => {
  const body = site.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', base).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
