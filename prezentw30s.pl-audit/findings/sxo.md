# SXO: Search Experience Analysis, prezentw30s.pl

Date: 2026-11-04 · Scope: homepage (quiz plus catalogue hub) and the planned list pages `/mikolajki/dla-niej/do-50-zl/` and `/swieta/dla-niego/` · Method: SERP-backwards analysis of 5 Polish seed queries

## SXO Gap Score: 21/100 (list pages as they are today)

This is separate from the SEO Health Score. It measures how far the pages are from what Google currently rewards for the seed queries. Most of the gap is **missing content, not a wrong concept**. The planned list-page template matches the SERP well. Nothing has been published into it yet.

---

## 1. Key finding: page-type mismatch

| Page | Classified as (taxonomy) | SERP dominant type | Severity |
|---|---|---|---|
| `/mikolajki/dla-niej/do-50-zl/` (live) | Placeholder: 200 + `noindex`, "Tę listę jeszcze składamy", 0 products | Editorial gift-guide listicle (Blog Post / Comparison hybrid), 76% | **CRITICAL** (no content to rank, cannot be indexed) |
| `/swieta/dla-niego/` (live) | Same placeholder | Same | **CRITICAL** |
| List page as designed (PRODUCT.md: intro, date and author, products with "Pasuje, jeśli", FAQ, related) | Curated listicle | Same | **ALIGNED** once filled |
| Homepage `/` | Tool / Interactive (3-step quiz above the fold) plus hub | Listicle for these queries | **HIGH**, but expected: the homepage should rank for the brand and for "pomysł na prezent", and pass users on to the list pages |

The design is aligned. The problem is timing. Mikołajki falls on 6 Dec, 32 days from today. Ranking articles in this niche are published or updated around 25 Nov to 1 Dec (for example eska.pl, dated 1 Dec 2025). Google needs time to crawl and index a new domain, so the Mikołajki lists need to be indexable around **15-20 Nov** at the latest. Every quiz path and all 6 "Gotowe listy" cards on the homepage end on a placeholder today. For a user, that is a dead end.

---

## 2. SERP analysis

The data comes from WebSearch, not a live google.pl results page. Ads, Shopping, PAA and AI Overview were not visible. About 10 organic results were classified per query, 50 in total.

| Query | Listicle / guide | Retailer category / LP | Other |
|---|---|---|---|
| prezent na mikołajki dla niej | 6 (eska x2, morele, se.pl, gowork, orientana) | 4 (Notino /mikolaj/, Media Expert lp x2, Empik /mikolajki) | – |
| prezent na mikołajki do 50 zł | 8 (eska x3, MediaMarkt poradnik, Media Expert poradnik, benchmark, zestawienie, se.pl) | 1 (Media Expert lp) | 1 (Komputronik promo news) |
| prezent na święta dla niego | 8 (morele x2, doz.pl, rp, wprost, poradnikprzedsiebiorcy x2, spidersweb) | – | 1 tag hub, **1 quiz (Sephora "quiz prezentowy")** |
| prezent na święta dla niej do 100 zł | 9 (morele x2, neonet, android.com.pl, benchmark x2, zestawienie, eska, MediaMarkt) | 1 (Notino /tanie-prezenty/, Empik /prezenty-dla-niej) | – |
| prezent na mikołajki dla niego pomysły | 7 (eska x4, x-kom poradnik, tabletowo, zestawienie) | 3 (Media Expert lp x2, Notino, Empik) | – |
| **Total (about 50)** | **about 38 (76%)** | **about 10 (20%)** | 2 |

**Consensus:** an editorial list of gift ideas segmented by recipient and budget, usually written by a retailer's content team ("Jaki prezent na święta dla niej do 100 zł?"). Confidence: 76%.

### What the ranking pages contain (2 sampled in depth)

- **morele.net, "Jaki prezent na święta dla niej do 100 zł?"**: H1, about 90-word intro, 2 H2s ("jak wybrać?" and "pomysły"), a table of contents, 5 idea categories with advice, and 5 product cards (price, buy link, review count). No author. Last updated **7 Dec 2021**, created 2019. No FAQ.
- **eska.pl, "Mikołajkowy prezentownik: dla niej i dla niego"**: author and date (1 Dec 2025), 10 ideas (5 for her, 5 for him), one short paragraph each. **No prices, no images, no shop links.**

### SERP signals worth acting on

- **Stale competition.** Many results carry old years ("Mikołajki 2017", "2020", "2021", morele updated 2021). Content dated 2026 with verified prices has a real freshness edge.
- **Budget in title and H1.** "do 50 zł" and "do 100 zł" appear in many titles, so the `/do-50-zl/` URL pattern matches the SERP.
- **Last-minute framing.** Phrases like "na ostatnią chwilę" and "kupisz od ręki" signal delivery-time anxiety.
- **Recipient sub-segments inside "dla niej / dla niego".** Results split into dziewczyna, żona, chłopak, mąż and przyjaciel, plus koleżanka or kolega (classroom and work Mikołajki: morele, gowork).
- **Social price norm.** "Prezent na Mikołajki w szkole nie powinien przekraczać ok. 50 zł; od bliskich do ok. 100 zł" (eska).
- **Fallback ideas** recur in almost every list: gift cards, vouchers and experiences.
- **Retailer dominance.** Media Expert, MediaMarkt, Empik, Notino, x-kom and morele hold most positions. An affiliate site wins on curation and honesty ("Pasuje, jeśli"), not on catalogue size.
- **A quiz ranks for "dla niego"** (Sephora "quiz prezentowy"). This supports the homepage quiz as a secondary entry point.

---

## 3. What a list page must contain to match intent (SOLL)

Ordered top to bottom for a phone screen:

1. **Breadcrumb**: Strona główna > Mikołajki > Dla niej > Do 50 zł (already present). Add BreadcrumbList JSON-LD.
2. **H1 with budget and year**: "Prezent na Mikołajki dla niej do 50 zł: 8 pomysłów na 2026". Title: "Prezent na Mikołajki dla niej do 50 zł – 8 trafionych pomysłów (2026) | Prezent w 30 sekund".
3. **Answer-first intro, 2-3 sentences**, plus "Sprawdzone [DATA] · [IMIĘ]" with dateModified. Above the fold on mobile.
4. **Budget and recipient switcher as static links** (decision of 31.10): Do 50 / Do 100 / Do 200 zł · Dla niej / Dla niego. Shows that the cumulative thresholds are deliberate.
5. **6-10 product cards** ("mało, a dobrze", in line with competitors' 5-10). Each card has:
   - a photo from the partner feed (today: "zdjęcie" text placeholder, 0 `<img>`)
   - product name and shop name (Kosmella, MultiPerfumeria, WĘC, Prezentokracja, Brasty)
   - price "ok. [CENA] zł" with the verification date, falling back to "Sprawdź aktualną cenę w sklepie" after 30 days
   - "Pasuje, jeśli …": the main differentiator, which no competitor has
   - a CTA naming the shop: "Zobacz w Kosmella" → `/go/slug` with `rel="sponsored nofollow"`, at least 44 px tall
6. **"Na ostatnią chwilę" block**: an e-voucher (Prezentokracja) or other instantly delivered option, plus a note about the order deadline for delivery before 6 Dec or 24 Dec. This answers the "kupisz od ręki" signal.
7. **Short "Jak wybrać?" section (2-4 bullets)**, the same H2 pattern that morele ranks with.
8. **FAQ, 3-5 questions taken from the SERP**: "Ile wydać na prezent na Mikołajki?", "Co kupić koleżance z pracy na Mikołajki?", "Prezent na Mikołajki na ostatnią chwilę?", "Czy voucher to dobry prezent?". FAQ rich results are limited, so the value here is content and AI-answer coverage.
9. **Related lists**: the same person on another occasion, the same occasion at another budget, and the hobby hubs.
10. **Affiliate bar** (already planned) and a link to "Jak zarabiamy".
11. **Schema**: ItemList (with Product name, image and offers.price only when verified), BreadcrumbList, and Article with author Person and dateModified.

`/swieta/dla-niego/` (hub without a budget) needs the same template with products across budgets, grouped or sortable by price, plus links to the `/do-50-zl/`, `/do-100-zl/` and `/do-200-zl/` children.

**Partner-mix gap for "dla niego".** The SERP for men's gifts is dominated by gadgets, shavers, headphones, Funko figures, socks, perfume and watches. The current partner set (cosmetics, perfume, jewellery, experiences, watches) covers perfume, watches (Brasty) and experiences, but has little under 50 zł for him. Facetaria (reserve partner) and Prezentokracja vouchers would help. Building `/mikolajki/dla-niego/do-50-zl/` (already featured on the homepage) with fewer than 3 solid products would conflict with the noindex rule and with "Mało, a dobrze".

---

## 4. User stories (from SERP signals)

1. **Awareness. Signal: "prezent na Mikołajki w szkole / w pracy ≤ 50 zł" (eska, morele "mikołajki klasowe", gowork).** As a person who drew a coworker in the office Mikołajki, I want ideas that are safe and impersonal and stay under the 50 zł limit, so I don't overspend or seem too intimate. Barrier: the "osoba" options are only dla niej / dla niego, with no colleague framing.
2. **Consideration. Signal: "Jaki prezent na święta dla niej do 100 zł?" plus sub-segments żona, dziewczyna, siostra (morele).** As a man buying for my partner, I want a few concrete products with prices, so I can choose in minutes rather than browse Media Expert categories. Barrier: lists are empty, and there are no prices or images yet.
3. **Decision. Signal: "na ostatnią chwilę", "kupisz od ręki" (eska, benchmark).** As a shopper 2-3 days before 6 Dec, I want to know which gifts will arrive in time or can be sent instantly, so I avoid showing up empty-handed. Barrier: no delivery or e-voucher information is planned.
4. **Consideration. Signal: "dopasuj prezent do zainteresowań" (Media Expert, doz.pl), Sephora quiz ranking.** As someone who knows his hobby but not the product, I want to start from "wędkarz" or "gracz" and get a short list, so my gift doesn't look generic. Barrier: the hobby hubs are placeholders, and the quiz has no hobby step.
5. **Decision. Signal: retailer dominance, price and review counts on morele cards.** As a careful buyer, I want to see the price and why a product suits her before I click to a shop I may not know, so I trust the recommendation. Barrier: no prices, no author and no review signals. Strength: "Pasuje, jeśli" and the open affiliate disclosure.

---

## 5. Gap analysis (7 dimensions)

| Dimension | Score | Evidence |
|---|---|---|
| Page Type | 4/15 | The planned listicle template is aligned, but both live URLs are 200 + `noindex` placeholders. The homepage is a Tool page, which is right for the brand but not for these queries. |
| Content Depth | 1/15 | 0 products on any list. Homepage boilerplate-stripped text is 383 characters. "Gotowe listy" cards show "[N] propozycji". Competitors offer 5-10 ideas plus "jak wybrać" sections. |
| UX Signals | 8/15 | Strengths: mobile-first, 3-step quiz with a "Pytanie 1 z 3" progress indicator, breadcrumbs, a "Wolę przeglądać katalog" escape link, theme toggle. Weakness: every path from the quiz and the 6 ready-list cards ends on "w przygotowaniu", and the catalogue hubs (/okazje/, /osoby/, /hobby/*, /do-50-zl/) are placeholders. |
| Schema | 0/15 | No JSON-LD anywhere (`structured_data.block_count: 0`). Missing: WebSite and Organization (homepage), ItemList, BreadcrumbList, Article (lists). |
| Media | 1/15 | 0 `<img>` elements. Product slots show the literal text "zdjęcie". The 13 SVGs are UI icons. |
| Authority | 4/15 | Strengths: affiliate disclosure on the homepage, "Jak zarabiamy" and "O nas" pages, a "sprawdzone 03.11.2026" date on the sample card. Missing: no named author or editor on content, new domain, no reviews or experience signals. |
| Freshness | 3/10 | Pages are dated 2026-11-03 or 04, but there is no dated content yet. The opportunity is large because competitors are stuck on 2019-2021 updates. |
| **Total** | **21/100** | |

---

## 6. Persona scoring (current homepage)

Personas were derived from the SERP signals above and weighted by how often the SERP addresses them.

| Persona (SERP signal) | Relevance | Clarity | Trust | Action | Total |
|---|---|---|---|---|---|
| P4 Office/class Secret Santa, 50 zł limit (morele "klasowe", gowork) | 7 | 13 | 8 | 3 | **31** |
| P5 Price-checker who trusts retailers (Media Expert/Empik dominance, prices on cards) | 10 | 12 | 6 | 3 | **31** |
| P2 Partner buyer, Święta 100-200 zł (żona/dziewczyna segments) | 13 | 15 | 8 | 4 | **40** |
| P3 Buying for him by hobby (doz "dopasuj do zainteresowań") | 14 | 14 | 8 | 4 | **40** |
| P1 Last-minute Mikołajki buyer, do 50 zł ("na ostatnią chwilę") | 14 | 15 | 8 | 4 | **41** |
| P6 "Just tell me" quiz user (Sephora quiz ranks) | 18 | 17 | 9 | 5 | **49** |
| **Average** | 12.7 | 14.3 | 7.8 | 3.8 | **39/100 (Critical Mismatch band)** |

The lowest dimension across all personas is **Action**, the systemic issue: every conversion path ends on a placeholder. **Trust** is second: no product, price, photo or person is visible yet.

### Improvements, weakest persona first

1. **P4 Office Secret Santa (31).** Add a work/class Mikołajki entry ("Mikołajki w pracy do 50 zł" as a ready list, or a "koleżanka/kolega z pracy" option). PRODUCT.md already names "znajomy z pracy" as an example entry, but it was dropped from the seasonal quiz. Use neutral, safe products such as a cosmetics set, a mug or a candle.
2. **P5 Price-checker (31).** Show real prices "ok. X zł" with "sprawdzone [DATA]", product photos and shop names on the cards. Replace the "[N] propozycji" and "zdjęcie" placeholders before launch, or hide the cards until filled.
3. **P2 Partner buyer (40).** Publish `/swieta/dla-niej/do-100-zl/` and `/do-200-zl/` first. They have the strongest partner fit (Kosmella, MultiPerfumeria, WĘC, Brasty). Mention żona, dziewczyna and siostra in the intro and FAQ, without stuffing.
4. **P3 Hobby buyer (40).** Fill at least 2 hobby hubs, or hide the 5 hobby chips until they exist. Today they lead to placeholders.
5. **P1 Last-minute buyer (41).** Add a "Na ostatnią chwilę" block (e-vouchers, ships in 24 h) and a shipping-deadline note on Mikołajki lists. Consider a homepage banner from about 1 Dec.
6. **P6 Quiz user (49).** Only make the quiz's final step live for combinations that have a published list. Otherwise send users to the nearest filled list ("Do 50 zł jeszcze składamy; zobacz Do 100 zł"), not to a dead end. Replace the self-promotional sample card ("Idealny dla każdego / jeden uśmiech") with a real product once one exists.

Homepage copy note: the H1 is "Prezent w 30 sekund" and contains no generic keyword. That is fine for a brand homepage, since the list pages carry the queries. Adding a supporting line under the H1, such as "Pomysły na prezent na Mikołajki i Święta – dla niej i dla niego", would help with both relevance and clarity.

---

## 7. Priority actions

1. **By about 15 Nov:** publish 3-4 filled lists (Mikołajki dla niej do 50, Święta dla niej do 100 and do 200, plus one "dla niego" with an adequate partner mix). Remove `noindex`, add them to the sitemap and request indexing.
2. Hide or redirect homepage cards and quiz outcomes that point to empty lists.
3. Add JSON-LD: WebSite and Organization on the homepage; ItemList, BreadcrumbList and Article (author, dateModified) on lists.
4. Add real partner-feed images and verified prices.
5. Put the year (2026) and the number of ideas in list titles and H1s. Show a visible verification date and author.
6. Add a "Na ostatnią chwilę" block and a FAQ to the list template.
7. Fix the partner gap for "dla niego do 50 zł" (Facetaria, vouchers) before promoting that list.

Related skills: `/seo schema` (ItemList and Article generation), `/seo content` (E-E-A-T: author entity and experience signals), `/seo page` (list-page audit after the first lists ship).

---

## 8. Limitations

- SERP data came from WebSearch, not a geo-located google.pl results page. Positions are approximate. Ads, Shopping carousels, PAA, AI Overview and related searches could not be observed, so the user stories rely on organic titles and snippets.
- There is no search-volume data, so persona weights are estimated from how often the SERP mentions each segment.
- Only 2 ranking pages were inspected in depth (morele, eska). The others were classified from title, URL and snippet.
- The list pages have no content, so content depth, media and schema were scored against the intended template (PRODUCT.md, decyzje.md) and the live placeholder.
- Only quiz step 1 was visible in the rendered DOM. Steps 2-3 and the result routing were inferred from the decision log (03.11.2026), not clicked through.
- Core Web Vitals, real-device mobile testing and analytics were out of scope.

Generate a PDF report? Use `/seo google report`.

---

## Structured findings (audit-data.json, category "Search Experience")

```json
{
  "category": "Search Experience",
  "sxo_gap_score": 21,
  "persona_average": 39,
  "serp_consensus": {"type": "Editorial gift-guide listicle", "confidence": 0.76, "secondary": "Retailer category landing page (0.20)", "queries_analyzed": 5, "results_classified": 50},
  "findings": [
    {"id": "sxo-01", "severity": "critical", "title": "Target list pages are noindex placeholders with 0 products", "urls": ["/mikolajki/dla-niej/do-50-zl/", "/swieta/dla-niego/"], "fix": "Publish 6-10 product lists and remove noindex by ~15 Nov (Mikołajki 6 Dec)"},
    {"id": "sxo-02", "severity": "high", "title": "All quiz outcomes and 6 'Gotowe listy' cards dead-end on 'w przygotowaniu'", "urls": ["/"], "fix": "Route only to filled lists; hide or redirect empty combinations"},
    {"id": "sxo-03", "severity": "high", "title": "No structured data on any page", "fix": "WebSite+Organization (home); ItemList, BreadcrumbList, Article (lists)"},
    {"id": "sxo-04", "severity": "high", "title": "No images or prices; text placeholders 'zdjęcie' and '[N] propozycji' visible", "fix": "Partner-feed images, verified prices with date"},
    {"id": "sxo-05", "severity": "medium", "title": "SERP rewards budget plus year in title, last-minute framing, colleague segment", "fix": "H1 with budget, count, 2026; 'Na ostatnią chwilę' block; work Secret Santa list"},
    {"id": "sxo-06", "severity": "medium", "title": "Partner mix thin for 'dla niego do 50 zł'", "fix": "Add Facetaria or vouchers before promoting that list"},
    {"id": "sxo-07", "severity": "info", "title": "Opportunity: competitors stale (2019-2021) and lack 'why it fits' reasoning", "fix": "Fresh dated lists with 'Pasuje, jeśli' as differentiator"}
  ]
}
```
