import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://prezentw30s.pl',
  trailingSlash: 'always',
  // shortcut: any https host is allowed for product photos, narrow to partner feed domains once PRE-17 settles them
  image: { remotePatterns: [{ protocol: 'https' }] },
});
