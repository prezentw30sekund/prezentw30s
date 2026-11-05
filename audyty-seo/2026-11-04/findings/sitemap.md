# Sitemap audit: https://prezentw30s.pl (2026-11-04)

Score: 20/100 (pre-launch; the score is low only because nothing exists yet. The noindex logic in the code is sound.)

## Validation
| Check | Result |
|---|---|
| /sitemap-index.xml, /sitemap.xml | FAIL: 404 (no @astrojs/sitemap integration) |
| /robots.txt | FAIL: 404, no Sitemap line and no /go/ rule |
| XML validity, URL status, lastmod, limits (50k / 50MB) | N/A (no file) |
| Deprecated tags | N/A. Do not emit priority or changefreq. |
| noindex pages in sitemap | N/A now. This is the main risk once the integration is added, see below. |
| `site` in astro.config.mjs | PASS (https://prezentw30s.pl, trailingSlash 'always', matches canonical in Base.astro) |
| Canonical | PASS (Base.astro builds it from Astro.site) |

## Findings
1. Critical (at launch): no sitemap. Add one when the first lists go indexable.
2. High: no robots.txt. /go/ affiliate redirects are not blocked and there is no Sitemap line.
3. High (trap): @astrojs/sitemap includes every built route by default. That means 29 noindex pages, plus every okazja x osoba x budget combination from `[okazja]/[osoba]/[...budzet].astro`, which are noindex "w przygotowaniu". Its `filter` only receives the URL, not the page's noindex flag, so it needs an allowlist.
4. Medium: noindex is decided in two places (`noindex` in [...budzet].astro, hard-coded `noindex` in [...strona].astro). Derive the sitemap from the same rule, or the two will drift.
5. Medium: do NOT Disallow noindex pages in robots.txt. Google must be able to crawl them to see the noindex tag.
6. Info: `/go/` does not exist in src/pages yet. Check where the redirects will live (vercel.json redirects or an endpoint). Add `rel="sponsored nofollow"` on the links to /go/.
7. Info: the home page (/) and the static pages (o-nas, jak-zarabiamy, kontakt, polityka-prywatnosci) are the only candidates that are currently indexable (or should be). Confirm which of them carry noindex. The 29/30 figure suggests only one page is indexable.

## Recommended config
Extract the indexability rule into one helper and use it in both the page and the sitemap.

`src/data/indexable.ts` (build-time, shared; sketch):
```ts
import { getCollection } from 'astro:content';
import { budzety } from './katalog';
// Mirror of the rule in [...budzet].astro: draft or missing list => noindex; budget sub-list < 3 products => noindex.
export async function indexableUrls(site: string) {
  const urls = new Set<string>([`${site}/`, `${site}/o-nas/`, `${site}/jak-zarabiamy/`, `${site}/kontakt/`, `${site}/polityka-prywatnosci/`]);
  for (const l of await getCollection('listy')) {
    if (l.data.szkic) continue;
    urls.add(`${site}/${l.data.okazja}/${l.data.osoba}/`);
    for (const slug of l.data.podstronyBudzetu) {
      const b = budzety.find((x) => x.slug === slug)!;
      if (l.data.produkty.filter((p) => p.cena > b.od && p.cena <= b.do).length >= 3)
        urls.add(`${site}/${l.data.okazja}/${l.data.osoba}/${slug}/`);
    }
  }
  return urls;
}
```

Hubs (/mikolajki/, /dla-niej/, /do-50-zl/, /hobby/...) are noindex until PRE-32. When they go live, add them to the set with a condition (for example, at least 3 products).

Option A (simplest, recommended): skip @astrojs/sitemap and write `src/pages/sitemap.xml.ts`. It uses `indexableUrls(String(site))` and outputs `<urlset>` with `<loc>` and `<lastmod>` (from `aktualizacja`). It is static, it needs no config, and the rule lives in one place. Add `<sitemap>` index splitting only past 50k URLs, which is unrealistic here (~20-40 lists plus budget sub-lists).

Option B (@astrojs/sitemap with filter): the config cannot import `astro:content`, so generate the allowlist first (a prebuild script writing `src/data/indexable.json`, or parse the front matter in the config) and then:
```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap';
import indexable from './src/data/indexable.json' with { type: 'json' };
const ok = new Set(indexable); // full URLs with trailing slash
export default defineConfig({
  site: 'https://prezentw30s.pl',
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => ok.has(page),
    serialize: (item) => ({ url: item.url, lastmod: lastmodFor(item.url) }), // real `aktualizacja`; no priority/changefreq
  })],
  // image: ... keep as is
});
```
Add a post-build check in CI: fail if any URL in dist/sitemap-0.xml has `<meta name="robots" content="noindex">` in its dist HTML. This catches drift between the helper and the page.

## robots.txt draft (public/robots.txt)
```
User-agent: *
Allow: /
Disallow: /go/

Sitemap: https://prezentw30s.pl/sitemap-index.xml
```
Use `/sitemap.xml` here if Option A is chosen. Do not block the preview *.vercel.app domain via robots. Instead, send `X-Robots-Tag: noindex` there (vercel.json header, or the Vercel preview default). Do not use `Disallow: /` before launch while the sitemap is live. The noindex tags already cover the pre-launch period.

## Quality gates for planned list pages
- Scale: 20-40 hand-made lists is below the 30/50 location-page thresholds in the audit rules. Hand-made lists are not doorway pages, but the gate applies if you ever generate more. Warn at 30 indexable lists (require 60%+ unique text per page), stop at 50 and require written justification in docs/decyzje.md.
- Never index a "w przygotowaniu" page. Rule: `!d || d.szkic` means noindex and out of the sitemap (already in code).
- Budget sub-lists: >= 3 products in the budget range (already enforced). Also require that the sub-list differs materially from the parent: different product set (not the parent minus one item), its own intro or H1, and its own title and description (current title is generated: `${h1} | prezentw30s.pl`). If the sub-list equals the parent, noindex it or add a canonical to the parent.
- Per indexable list: unique intro (human-reviewed per PRE-12), >= 5 products, each with `pasuje` text written for that occasion and person (not just a city-style swap of the okazja/osoba word), `sprawdzono` date, author, and FAQ where useful. Keep `aktualizacja` truthful and use it as sitemap lastmod. Do not bump it for boilerplate edits.
- Uniqueness: product-description reuse across lists should stay below ~40% of the text per page.
- Hubs (/mikolajki/, /dla-niej/, /do-50-zl/, /hobby/*): index only with an editorial intro plus >= 3 products. A pure tag-aggregation page stays noindex, as it is now.
- No two indexable URLs with the same product set and the same intro. Check cannibalisation (e.g. /mikolajki/ against /mikolajki/dla-niej/).
- Affiliate links: all through /go/ with `rel="sponsored nofollow"`. The affiliate disclosure (/jak-zarabiamy/) must be linked from each list.
- Internal links: every indexable list must be linked from the home page or a hub. Related links point only to existing lists (already done in `powiazane`).
- CI gates: sitemap URLs return 200, none noindexed, none redirecting, all with trailing slash, lastmod is valid W3C date, and the count is reported.

## Missing / extra
- Missing: sitemap, robots.txt, the Sitemap line, the /go/ rule.
- Extra (in a naive default sitemap): about 29 noindex pages plus all empty quiz combinations. They must be excluded.
