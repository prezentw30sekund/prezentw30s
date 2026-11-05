# GEO / AI Search Readiness: prezentw30s.pl

Audit date: 2026-11-04. Site state: pre-launch. The homepage is the only indexable page. List pages, O nas, Jak zarabiamy and Kontakt all have `noindex`.

## GEO Readiness Score: 30 / 100

| Dimension | Weight | Score | Weighted | Main reason |
|---|---|---|---|---|
| Citability | 25% | 15 | 3.8 | The homepage has about 270 words, all UI and microcopy. No passage answers a gift question. |
| Structural Readability | 20% | 45 | 9.0 | One H1, a clean H2/H3 tree and `lang="pl"`. No question headings, lists, tables or FAQ. |
| Multi-Modal Content | 15% | 10 | 1.5 | No `<img>` elements. The live page shows "zdjęcie" and "[N] propozycji" placeholders. No og:image. |
| Authority & Brand Signals | 20% | 15 | 3.0 | No named author. Trust pages are noindex and contain placeholders. No schema. No external brand mentions. |
| Technical Accessibility | 20% | 65 | 13.0 | Static Astro SSR (`is_spa: false`), HTTPS, HSTS, canonical. No robots.txt, sitemap or JSON-LD. |
| **Total** | | | **30** | |

The low score mostly reflects the pre-launch state: there is no content to cite yet. The technical base is sound. Once the list pages are indexable and built on the template below, the score should reach 65-75.

## AI Crawler Access

`/robots.txt` returns 404. Under RFC 9309, a 4xx robots.txt means no restrictions, so every crawler is allowed. Live tests with each crawler's user agent all returned HTTP 200, so Vercel does not block any of them.

| Crawler | What it governs | Status |
|---|---|---|
| OAI-SearchBot | ChatGPT Search citations | Allowed (200) |
| GPTBot | OpenAI model training only, not ChatGPT Search | Allowed (200) |
| Claude-SearchBot | Claude search citations | Allowed (200) |
| ClaudeBot | Anthropic model training only | Allowed (200) |
| PerplexityBot | Perplexity search index | Allowed (200) |
| Googlebot | Google Search and AI Overviews / AI Mode inclusion | Allowed (200) |
| Google-Extended | Gemini/Vertex training and grounding. Does not affect AI Overviews. | Allowed (no robots.txt) |
| Bingbot | Bing and Copilot | Allowed (200) |
| Applebot-Extended | Apple Intelligence training only | Allowed (no robots.txt) |
| CCBot | Common Crawl training | Allowed (200) |

Recommendation: add a real `/robots.txt` that explicitly allows the search bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, Bingbot) and includes a `Sitemap:` line. Whether to block the training-only bots (GPTBot, ClaudeBot, CCBot, Google-Extended, Applebot-Extended, cohere-ai) is a business decision. For a new brand that wants to be known, allowing them is reasonable. Blocking Google-Extended would remove the site from Gemini grounding but not from AI Overviews.

## llms.txt / RSL

- `/llms.txt` is missing (404). It is optional. Google has said it does not use it, and no major AI search engine has confirmed using it for ranking or citation. Low priority: a short file listing the main list hubs costs about 15 minutes once lists exist.
- RSL 1.0 licensing: none (no robots.txt `License:` directive, no license file). This is not needed for an affiliate site that wants maximum reuse.

## Passage Citability: Current Pages

Measured on the boilerplate-stripped text (trafilatura output was 383 characters).

- **Homepage (indexable):** no self-contained passage of 130-170 words. The longest block is "Jak to działa" at about 40 words of process copy. Nothing here answers a query like "prezent na Mikołajki dla niej do 50 zł". The visible template placeholders "zdjęcie" and "[N] propozycji" make the page look unfinished to both crawlers and users. Either hide those tiles until lists exist or fill them with real counts.
- **O nas (noindex):** the best methodology copy on the site: 4-8 picks, "Pasuje, jeśli", manual price check with date, 30-day staleness rule, second-person review. This is exactly the E-E-A-T text AI engines reward, but it is noindex and still contains the placeholder `[OZNACZENIE TREŚCI TWORZONYCH Z POMOCĄ AI: po decyzji w PRE-8]`.
- **Jak zarabiamy (noindex):** opens with a strong direct answer ("Z prowizji. Gdy kupisz coś przez nasz link..."). Still has the placeholders `[DATA]`, `[LISTA PROGRAMÓW...]` and `[DO POTWIERDZENIA...]`.
- **Kontakt (noindex):** the operator line is a placeholder: `[NAZWA LUB IMIĘ I NAZWISKO, ADRES, NIP...]`. A real operator identity is a trust signal, and Polish/EU law requires it.
- **List pages (noindex):** 37-word "Tę listę jeszcze składamy" placeholder. Correctly noindexed.
- **Structured data:** none on any page (0 JSON-LD blocks).

## Brand Mention Analysis

The brand is new and pre-launch. I ran no live search, so this is an expectation, not a measurement.

| Platform | Status | Note |
|---|---|---|
| Wikipedia / Wikidata | None expected | Not achievable short-term. Not a priority. |
| Reddit (r/Polska and similar) | None expected | Polish gift threads exist, especially before Christmas. Join authentically, never as spam. |
| YouTube | None expected | YouTube mentions have the strongest correlation with AI citations (~0.74). Short "3 prezenty do 50 zł" videos or Shorts linking to the lists could help. |
| LinkedIn / Facebook / Instagram | None found on page | No `sameAs` profiles linked. Create at least one profile and reference it in Organization schema. |
| Polish forums and media (Wykop, gift roundups in regional media) | None expected | PR around Mikołajki and Święta is the realistic entry point. |

## What the List Template Needs to Be Quoted

The planned format (intro, author and update date, products with "Pasuje, jeśli", FAQ) is the right base. Concrete requirements:

1. **H1 that matches the query, plus a 40-60 word direct answer right below it.** Example: "Prezent na Mikołajki dla niej do 50 zł: 6 propozycji sprawdzonych 03.11.2026. Najlepiej sprawdzą się X (dla..), Y (dla..)..." Name the top 2-3 picks and the price range in the first sentence. This is the block AI Overviews and Perplexity lift most often.
2. **Visible byline and dates:** "Opracował: [imię] / Zespół prezentw30s.pl · Sprawdzone: DD.MM.RRRR · Zaktualizowano: ..." in HTML (not only in JS), with a `<time datetime>` element. Named people with a short bio on O nas are stronger than "zespół" for E-E-A-T. If the team signs as a group, link the byline to O nas.
3. **Each product as a self-contained block of about 80-150 words** under its own H2/H3 heading (product name and type, e.g. "Zestaw do kawy drip – dla fanki kawy"). Each block should include:
   - The price in zł with a check date, plus the shop name.
   - A "Pasuje, jeśli..." sentence naming the recipient type and the reason.
   - A "Nie pasuje, jeśli..." line. Honest negatives raise trust and make the block quotable as an answer to "czy X to dobry prezent".
   - One specific fact (size, capacity, what is in the box, delivery time before 6.12 or 24.12).
   - A real product photo with Polish alt text.
4. **Quick comparison table** near the top: product, price, who it suits, shop. Tables are easy for LLMs to extract and are often reproduced in ChatGPT and Perplexity answers.
5. **FAQ with real Polish query phrasings** and 40-80 word answers. Examples: "Co kupić dziewczynie na Mikołajki do 50 zł?", "Jaki prezent na Święta dla taty, który ma wszystko?", "Do kiedy zamówić, żeby zdążyć przed Wigilią?". Use H3 question headings with the answer in the first sentence. Avoid generic FAQs repeated across lists.
6. **Short "Jak wybieraliśmy" section** (2-3 sentences, linking to O nas): criteria and the number of products considered.
7. **Schema (JSON-LD):** `ItemList` with `ListItem` → `Product` (name, image, `offers.price`, `priceCurrency: PLN`, `priceValidUntil` or check date). Add `Article` with `author`, `datePublished`, `dateModified`, plus `BreadcrumbList`. Add `Organization` with `sameAs` on the homepage. `FAQPage` markup no longer produces Google rich results for most sites but is harmless and can help other engines parse the page.
8. **Unique substance per list:** the risk is about 40 near-identical combination pages (okazja × osoba × budżet). Google AIO and ChatGPT skip thin, templated pages. Index a combination only when it has at least 4 distinct products and unique intro and FAQ text. Keep the rest noindex, as now.
9. **Keep content server-rendered.** The quiz is JS, which is fine, but the product lists must stay in the static HTML. They do today in Astro.
10. **Affiliate links:** keep `rel="sponsored"` plus the visible disclosure. This already matches the plan.

## Top 5 Highest-Impact Changes

| # | Change | Impact | Effort |
|---|---|---|---|
| 1 | Publish the first 3-6 seasonal lists (Mikołajki and Święta) using the template above, then remove their noindex. These are the only pages that can be cited, and the season peaks in 3-7 weeks. | Very high | High (content) |
| 2 | Fill the placeholders on O nas, Jak zarabiamy and Kontakt (operator, date, partners, AI label), then make those pages indexable and link them from every list byline. | High (trust / E-E-A-T) | Low, 1-2 h |
| 3 | Add JSON-LD: Organization and WebSite on the homepage, plus ItemList/Product, Article (author, dates) and BreadcrumbList on lists. | Medium-high | Medium, 3-4 h in the Astro layout |
| 4 | Add `/robots.txt` (search bots allowed, Sitemap line) and `@astrojs/sitemap` covering indexable URLs only. Submit to Google Search Console and Bing Webmaster Tools. Bing also feeds ChatGPT Search and Copilot. | Medium | Low, under 1 h |
| 5 | Remove the "zdjęcie" and "[N] propozycji" placeholders from the live homepage. Add real images and an og:image. Create one social profile (Instagram, TikTok or YouTube Shorts) and link it via `sameAs`. | Medium | Low-medium |

Optional: add `/llms.txt` (15 min). Ignored by Google, low impact elsewhere.

## Platform-Specific Scores (current / expected after template launch)

| Platform | Now | After | Notes |
|---|---|---|---|
| Google AI Overviews / AI Mode | 15 | 55-65 | Depends on Googlebot indexing and classic ranking first. The new domain needs time and links. The direct answer block and the table matter most. |
| ChatGPT Search | 15 | 50-60 | Uses the Bing index plus OAI-SearchBot. Submit to Bing Webmaster Tools. Benefits from brand mentions on other sites. |
| Perplexity | 20 | 60-70 | Favours fresh, dated, well-structured pages with specific prices. The best early opportunity for a new domain. |
| Bing Copilot | 15 | 50-60 | Same Bing index. IndexNow is a cheap win on Vercel. |

## Structured Findings (audit-data.json, category "AI Search Readiness")

```json
{
  "category": "AI Search Readiness",
  "score": 30,
  "dimensions": {"citability": 15, "structural_readability": 45, "multimodal": 10, "authority_brand": 15, "technical_accessibility": 65},
  "findings": [
    {"id": "geo-robots-missing", "severity": "medium", "title": "robots.txt returns 404", "detail": "All crawlers implicitly allowed (all UA tests returned 200); no Sitemap directive.", "fix": "Add robots.txt allowing search bots and pointing to the sitemap."},
    {"id": "geo-sitemap-missing", "severity": "medium", "title": "No sitemap.xml", "fix": "Add @astrojs/sitemap with indexable URLs only."},
    {"id": "geo-llms-missing", "severity": "info", "title": "llms.txt missing", "detail": "Optional; ignored by Google."},
    {"id": "geo-no-citable-content", "severity": "high", "title": "No citable passages on indexable pages", "detail": "Homepage has ~270 words of UI copy; lists are noindex placeholders."},
    {"id": "geo-placeholders-live", "severity": "high", "title": "Template placeholders visible in production", "detail": "Homepage: 'zdjęcie', '[N] propozycji'. O nas / Jak zarabiamy / Kontakt: bracketed TODOs incl. missing operator identity."},
    {"id": "geo-no-schema", "severity": "medium", "title": "No JSON-LD on any page", "fix": "Organization+WebSite; ItemList/Product, Article, BreadcrumbList on lists."},
    {"id": "geo-trust-pages-noindex", "severity": "medium", "title": "O nas, Jak zarabiamy, Kontakt are noindex", "fix": "Index after placeholders are filled."},
    {"id": "geo-no-images", "severity": "medium", "title": "No images or og:image"},
    {"id": "geo-no-brand-mentions", "severity": "low", "title": "No external brand presence or sameAs profiles", "detail": "New brand; not measured with live search."},
    {"id": "geo-thin-combination-risk", "severity": "medium", "title": "Risk of thin templated combination pages", "fix": "Index a combination only with at least 4 unique products and unique intro/FAQ."}
  ]
}
```
