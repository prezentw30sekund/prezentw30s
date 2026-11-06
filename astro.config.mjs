import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import links from './src/data/links.json' with { type: 'json' };
import { readFile, writeFile } from 'node:fs/promises';

const site = 'https://prezentw30s.pl';

// sitemap.xml from the built HTML: every page without noindex, so it never disagrees with the pages themselves (PRE-19).
const sitemap = {
  name: 'sitemap',
  hooks: {
    'astro:build:done': async ({ dir, pages }) => {
      const adresy = [];
      for (const { pathname } of pages) {
        const html = await readFile(new URL(`${pathname}index.html`, dir), 'utf8').catch(() => '');
        if (html && !html.includes('name="robots" content="noindex"')) adresy.push(new URL(pathname, site).href);
      }
      if (adresy.length === 0) throw new Error('sitemap: no indexable pages found');
      adresy.sort();
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${adresy.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`;
      await writeFile(new URL('sitemap.xml', dir), xml);
    },
  },
};

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [mdx(), sitemap],
  // /go/<slug> -> shop (PRE-15). Static output makes these noindex meta-refresh pages; the slug list lives in links.json.
  redirects: Object.fromEntries(Object.entries(links).map(([slug, url]) => [`/go/${slug}`, url])),
  // shortcut: any https host is allowed for product photos, narrow to partner feed domains once PRE-17 settles them
  image: { remotePatterns: [{ protocol: 'https' }] },
});
