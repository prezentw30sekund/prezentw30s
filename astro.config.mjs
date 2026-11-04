import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import links from './src/data/links.json' with { type: 'json' };

export default defineConfig({
  site: 'https://prezentw30s.pl',
  trailingSlash: 'always',
  integrations: [mdx()],
  // /go/<slug> -> shop (PRE-15). Static output makes these noindex meta-refresh pages; the slug list lives in links.json.
  redirects: Object.fromEntries(Object.entries(links).map(([slug, url]) => [`/go/${slug}`, url])),
  // shortcut: any https host is allowed for product photos, narrow to partner feed domains once PRE-17 settles them
  image: { remotePatterns: [{ protocol: 'https' }] },
});
