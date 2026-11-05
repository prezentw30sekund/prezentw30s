# Performance / Core Web Vitals - prezentw30s.pl (audited 2026-11-04)

Score: 94/100 (lab only; no CrUX field data; PSI API rate-limited, so local Lighthouse 13.6.0 with Chrome for Testing, simulated throttling).

## Lab results
| Page | Profile | Perf | FCP | LCP | TBT (INP proxy) | CLS |
|---|---|---|---|---|---|---|
| Home | mobile (3 runs) | 90 (outlier), 100, 100 | 0.8s | 0.8, 0.9, 0.9s (outlier run: Speed Index 12.2s, render delay 8.3s, unreproducible) | 0 ms | 0, 0.001, 0.001 |
| Home | desktop | 100 | 0.2s | 0.2s | 0 ms | 0.027 |
| List /mikolajki/dla-niej/do-50-zl/ | mobile | 100 | 0.8s | 0.8s | 0 ms | 0.027 |
| List | desktop | 100 | 0.3s | 0.3s | 0 ms | 0.004 |
All CWV in "good" range (LCP <=2.5s, INP proxy TBT ~0, CLS <=0.1). INP real value unknown until field data exists.

## Delivery
- TTFB 150-180ms (curl and Lighthouse), Vercel edge HIT, HTTP/2, Brotli on HTML and assets. Pass.
- HTML: cache-control public, max-age=0, must-revalidate (Vercel default, ETag revalidation). OK.
- /_astro/* : max-age=31536000, immutable. Pass.
- Page weight ~265-268 KiB, 7 requests, of which 240 KiB is fonts.
- JS: 3 small inline module scripts (quiz, @vercel/analytics 2.0.1, theme toggle) plus script.js 2 KB. TBT 0.

## Findings
1. MEDIUM - Shantell Sans Variable not subset: latin file 171 KB + latin-ext 69 KB, both "full" axis builds (@fontsource-variable/shantell-sans "full" files, weight 300-800 plus extra axes such as BNCE/INFM/SPAC). No font preload, so fonts are discovered only after CSS parse (request start ~260ms vs CSS 194ms in mobile trace). LCP text waits on the swap. Fix: import `@fontsource-variable/shantell-sans/wght.css` (wght-only, much smaller) instead of the full/index file; drop latin-ext unless Polish diacritics need it (they do: ą ć ę ł ń ś ź ż live in latin-ext, so keep it, but then Figtree latin-ext is the only Figtree file - correct for Polish); consider self-subsetting with pyftsubset to Latin + Polish glyphs (probably <40 KB each).
2. LOW-MEDIUM - No `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the heading/body fonts used above the fold. In Astro layout head: `import fontUrl from '@fontsource-variable/shantell-sans/files/shantell-sans-latin-ext-wght-normal.woff2?url'` and preload it; same for Figtree 400. Preload only 1-2 files.
3. LOW - Font-display: swap on all faces (good) but CLS 0.027 on desktop home and list mobile comes from fallback-to-webfont swap. Fix: Astro 5/6 `fonts` API (experimental/stable Fonts API) generates preload plus size-adjusted fallbacks automatically, or add manual `size-adjust`/`ascent-override` fallback @font-face for Shantell and Figtree. Still well under 0.1.
4. LOW - Both stylesheets (Base 12 KB raw/4 KB br, index 8 KB raw/2 KB br) are render-blocking; cost is negligible. Optional: `build.inlineStylesheets: 'always'` in astro.config.mjs (6 KB br total, saves one round trip ~ 100-200 ms on slow mobile).
5. INFO - Figtree ships woff fallbacks (unneeded); use woff2-only imports (`@fontsource/figtree/latin-ext-400.css` already includes both; the Fonts API avoids it).
6. INFO - Vercel Web Analytics inline script is small; keep. Home had one mobile outlier (score 90) not reproduced in two reruns; treat as lab noise but re-check in field once CrUX data accumulates.

## Priorities
1. Switch Shantell to wght-only/subset files (saves roughly 150-200 KB; biggest win on slow mobile).
2. Preload 1-2 critical woff2 files.
3. Add size-adjusted fallback fonts / Astro Fonts API for CLS.
4. Optionally inline CSS.
5. Monitor CrUX/Vercel Speed Insights after ~28 days of traffic for real INP/LCP/CLS.
