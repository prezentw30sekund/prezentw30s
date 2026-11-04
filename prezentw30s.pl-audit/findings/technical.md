# Technical SEO: prezentw30s.pl (audited 2026-11-04)
Score: 62/100

## Findings
- HIGH: no /robots.txt (404) and no sitemap (sitemap_discovery.py: all common paths 404). Fix: add public/robots.txt ("User-agent: *\nAllow: /\nSitemap: https://prezentw30s.pl/sitemap-index.xml") and `npx astro add sitemap` (site already set). While 29 pages are noindex, use sitemap filter to include only indexable URLs (filter: page => page === 'https://prezentw30s.pl/'), and drop the filter when lists go live. Do NOT block noindex pages in robots.txt (crawler must see the tag). Decide AI-crawler policy at the same time.
- HIGH: security headers limited to HSTS (max-age=63072000, no includeSubDomains/preload). Missing CSP, X-Content-Type-Options, X-Frame-Options/frame-ancestors, Referrer-Policy, Permissions-Policy. Also access-control-allow-origin: * on HTML. Fix: vercel.json "headers" for source "/(.*)" with nosniff, DENY (or CSP frame-ancestors 'none'), strict-origin-when-cross-origin, Permissions-Policy; start CSP in Report-Only (inline theme script + quiz-data JSON present, so hashes/nonce needed).
- MEDIUM: slashless URLs return 200 (e.g. /jak-zarabiamy) with canonical to slash version; /index.html also 200 (23518 B, same as /). Canonical protects, but duplicate crawl paths and split link signals remain. Fix: vercel.json {"trailingSlash": true} (308 slashless -> slash); also redirect /index.html -> /.
- MEDIUM: homepage lacks og:image, og:url, og:type, twitter:card and any JSON-LD (0 ld+json). Fix in Base.astro: add props image/type, og:url=canonical, WebSite + Organization JSON-LD on home (no SearchAction unless real search).
- MEDIUM: 404 is Vercel default ("NOT_FOUND" plain page), no branded page, no nav back. Fix: src/pages/404.astro (Astro emits 404.html, Vercel serves it with 404 status) with noindex and links to home/categories.
- MEDIUM: noindex strategy verified: /jak-zarabiamy/ and /mikolajki/ carry <meta name="robots" content="noindex">; homepage has none; all return 200 (not soft-404 style, fine). Risk: homepage links to ~28 noindex hubs and quiz links (/mikolajki/dla-niego/do-100-zl/ 200) so crawl budget wasted and link equity flows into noindex pages (noindex long-term becomes nofollow-like). Keep a launch checklist: remove `noindex` per page when product lists are populated (PRE-32), simultaneously add to sitemap filter. Consider making noindex a function of product count in [...strona].astro so it flips automatically.
- LOW: Cache-Control public, max-age=0, must-revalidate on HTML (Vercel default, OK; x-vercel-cache HIT). Hashed /_astro assets should be immutable by default; verify.
- LOW: canonical built from Astro.url.pathname on trailingSlash 'always': correct, absolute, self-referential. Query strings (?utm=1) return 200 with canonical to clean URL: OK.
- LOW: www->apex 301 and http->https 308 confirmed single hop. HSTS present.
- LOW: image remotePatterns allows any https host (astro.config.mjs); tighten before launch (SSRF/abuse of Vercel image optimization costs).
- LOW: /go/ outbound redirects (affiliate): /go/x/ 404 as expected; ensure Disallow: /go/ in robots.txt, rel="sponsored nofollow" on links, and X-Robots-Tag noindex on redirects. Homepage HTML had no rel="sponsored" matches in the quick grep; verify on product cards.
- INFO: Mobile: viewport meta width=device-width, initial-scale=1, viewport-fit=cover present; lang="pl". Touch targets not verified from source.
- INFO: Rendering: static SSG HTML, h1 present, content in raw HTML; JS only for quiz/theme (module script + inline theme script before paint, good for FOUC). No SPA shell.
- INFO: CWV from source: render-blocking 2 CSS files (small, Astro-hashed), inline style blocks; product images with fixed height 170px (check width/height attributes for CLS, remote images unoptimised). No webfont preload review done.
- INFO: IndexNow not applicable until pages are indexable; add key file in public/ at launch (Bing/Yandex).

## Pass/fail
Crawlability FAIL (robots/sitemap) | Indexability PASS (intentional) | Security PARTIAL | URL structure PASS w/ duplicates | Mobile PASS | CWV likely OK | Structured data FAIL (none) | JS rendering PASS | IndexNow N/A
