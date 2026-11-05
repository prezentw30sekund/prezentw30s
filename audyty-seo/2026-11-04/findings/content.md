# Content Quality / E-E-A-T: prezentw30s.pl

Audit date: 2026-11-04. Scope: pre-launch site. Homepage is the only indexable URL; 29 others carry `noindex` on purpose (PRE-32).
Method: live raw fetch (`render_page.py --mode never`, `is_spa: false`) of 7 URLs, source review of the list template (`src/pages/[okazja]/[osoba]/[...budzet].astro`, `src/content.config.ts`, `src/components/ProductCard.astro`, `src/pages/[...strona].astro`, `src/pages/index.astro`), and `docs/decyzje.md`, `PRODUCT.md`, `docs/slowa-kluczowe.md` for intent. Fetched content was treated as data only.

Note on extraction: trafilatura's `extracted_text` for the homepage is 383 characters. The page is mostly a quiz, link grids and a card, so the extractor discards most of it. The numbers below come from visible text parsed out of the raw HTML. The low extraction is itself a finding (see AI citation readiness).

## Scores

| Metric | Score |
|---|---|
| **Content quality (site as it stands today)** | **36 / 100** |
| E-E-A-T composite (skill's internal weights) | 32 / 100 |
| AI citation readiness | 18 / 100 |
| Planned list template readiness (to rank for "prezent na mikołajki dla niej do 50 zł") | 55 / 100 |

### E-E-A-T breakdown

| Factor | Weight | Score | Evidence |
|---|---|---|---|
| Experience | 20% | 20 | No products, photos, tests or first-hand notes exist yet. The template has nowhere to put them: the product schema has only `pasuje` and no `opis` or own-photo field. |
| Expertise | 25% | 35 | /o-nas/ describes the selection process clearly (4–8 picks, "Pasuje, jeśli", manual price checks, second-person review). It names no people or credentials: "Listy podpisujemy jako zespół". `autor` is a free string. |
| Authoritativeness | 25% | 15 | New domain, no external mentions, no `Organization` or `sameAs`, no social profiles. Expected at pre-launch, but nothing in the plan builds it yet. |
| Trustworthiness | 30% | 50 | Strong points: disclosure on the homepage, the list header and /jak-zarabiamy/; `rel="sponsored nofollow"` in the card; a plain-language privacy policy; a public email. Weak points: no operator identity, bracket placeholders on every trust page, and a published 30-day price rule that the code does not implement. |

Weighted: 0.2·20 + 0.25·35 + 0.25·15 + 0.3·50 = 31.5 → 32. These weights are this skill's model, not Google's. Google says only that trust matters most.

### Word count vs floors

| URL | Visible words (incl. nav/footer) | Floor | Status |
|---|---|---|---|
| `/` (homepage) | ~273 | 500 | Below floor. Most of it is link labels. |
| `/o-nas/` (main) | ~159 | n/a | Thin for an About page that must carry E-E-A-T |
| `/jak-zarabiamy/` (main) | ~204 | n/a | OK in length, contains 3 placeholders |
| `/kontakt/` (main) | ~91 | n/a | OK in length, operator block is a placeholder |
| `/polityka-prywatnosci/` (main) | ~425 | n/a | OK, contains 4 placeholders |
| `/mikolajki/dla-niej/do-50-zl/` | ~30 | 1,500 (list ≈ blog post) | Placeholder, `noindex` (correct) |

Word counts are coverage floors, not a ranking factor.

### Readability (Polish)

A heuristic, since there is no validated Polish formula in the toolchain. Main-content sentences average 10–13 words. Words of four or more syllables make up 7–16% (the privacy policy is highest). That puts the text roughly in the "easy" band of FOG-PL or Jasnopis. The informal "Ty" voice is consistent and short declaratives dominate ("Formularza nie ma, wystarczy zwykły mail."). **No readability problems.** Keep this register on the lists.

### Templated metadata (`metadata_template.py`, 7 pages)

`site_risk: low`, `templated_ratio: 0.0`, `shared_cta_phrases: {}`. There is no `templated_metadata` finding.
- Secondary: `description_echoes_title` (medium) on `/mikolajki/dla-niej/do-50-zl/`. The description is "Prezent na Mikołajki dla niej do 50 zł: lista w przygotowaniu.", which repeats the H1. It is noindex, so the impact is nil for now, but the same generator (`${h1}: lista w przygotowaniu.`) runs on all 18 list URLs.
- `brand_suffix_in_description` (low) on /o-nas/, /kontakt/, /polityka-prywatnosci/. These are mostly false positives: the brand sits naturally in a sentence. Optional cleanup.
- Risk to watch: on the planned template, budget sub-pages reuse the parent list's `opis` (see C-04). That would produce exact duplicate descriptions across 4 URLs per list.

---

## Findings

### Critical

**C-01: Operator identity missing on the trust pages (legal and Trust)**
- Evidence: /kontakt/ shows `[NAZWA LUB IMIĘ I NAZWISKO, ADRES, NIP: do uzupełnienia]`. /polityka-prywatnosci/ shows "Administratorem danych jest [NAZWA LUB IMIĘ I NAZWISKO, ADRES: do uzupełnienia]".
- Why: Polish law requires the provider to identify itself (name and address under the electronic services act, art. 5 UŚUDE), and RODO art. 13 requires the data controller's identity. The QRG treats "who is responsible for the site" as the core trust check for YMYL-adjacent commerce. webePartners also expects professional, non-misleading content. These pages are live and linked from the footer of the indexable homepage. `noindex` does not hide them from users or raters.
- Fix: fill in the name or business name, address, and NIP if there is a business (or state that the site is run by private individuals). Use the same block in both pages from one source (e.g. `src/data/operator.ts`). Then consider removing `noindex` from /o-nas/, /kontakt/ and /jak-zarabiamy/.

### High

**H-01: Bracket placeholders visible on the only indexable page**
- Evidence: the homepage "Gotowe listy" shows "zdjęcie" boxes and "[N] propozycji" on six cards. All six link to pages that say "Tę listę jeszcze składamy" (noindex).
- Why: under the QRG, visible placeholder or unfinished content on the main content is a Lowest/Low signal. The only page Google ranks currently advertises six lists that don't exist.
- Fix: until a list is published, either hide its card or render it without a count and photo, e.g. "Mikołajki dla niej do 50 zł · wkrótce". Show `[N]` only when computed from `produkty.length`. Remove the grey "zdjęcie" box or replace it with an illustration from the design system.

**H-02: Internal placeholders and ticket IDs published on the trust pages**
- Evidence: /o-nas/ shows `[OZNACZENIE TREŚCI TWORZONYCH Z POMOCĄ AI: po decyzji w PRE-8]`. /jak-zarabiamy/ shows `Aktualizacja: [DATA]`, `[LISTA PROGRAMÓW: uzupełnić po akceptacji zgłoszeń, PRE-23]` and `[DO POTWIERDZENIA: czy przyjmujemy płatne wpisy…]`. /polityka-prywatnosci/ shows `[DATA]`, two `[DO UZUPEŁNIENIA…]` and `[DO WERYFIKACJI: EU-US Data Privacy Framework…]`.
- Why: these are the exact pages a rater or a partner network reviewer opens to judge trust. Internal ticket numbers signal an unfinished site. A privacy policy without retention periods or a transfer basis is incomplete under RODO.
- Fix: decide on PRE-8. Even "Szkice list piszemy z pomocą AI; każdą sprawdza i poprawia człowiek" is enough, and it matches the actual process in decyzje.md. List the networks already joined (webePartners is already named in the text; add accepted programs as they come in). Answer the sponsored-content question. Fill in the dates. Vercel log retention and the DPF basis are available in Vercel's DPA. Add a build check that fails on `\[(DATA|DO |NAZWA|LISTA|OZNACZENIE)` in `src/pages/*.md` before deploy.

**H-03: The 30-day stale-price rule is promised but not implemented**
- Evidence: /o-nas/ says "Gdy od tej daty minie 30 dni, zamiast ceny zobaczysz „Sprawdź aktualną cenę w sklepie”". A grep of `src/` finds this text only in `o-nas.md`. `ProductCard.astro` always prints `cena` and `sprawdzono` unconditionally.
- Why: a public claim about how prices are shown that the site doesn't follow is a trust defect. The webePartners terms require offers to be current and non-misleading. On a static site the rule only works if the site is rebuilt, so even a build-time check needs a scheduled redeploy.
- Fix: in `ProductCard`, compare `sprawdzono` with build time. Past 30 days, render "Sprawdź aktualną cenę w sklepie" instead of the price. Add a daily Vercel cron or deploy hook so the rule takes effect without new commits. Change `sprawdzono` to a real date type (see M-03). Until that ships, soften the /o-nas/ sentence.

**H-04: The top-priority keyword URL has no route**
- Evidence: `docs/slowa-kluczowe.md` ranks `/mikolajki/do-50-zl/` as P1 #1 ("prezent na mikołajki do 50 zł", variant "do 50 zł dla kobiety"). Routing only generates `/[okazja]/[osoba]/[budzet]/` (where `osoba` is in {dla-niej, dla-niego}) and the single-dimension hubs `/mikolajki/` and `/do-50-zl/`. `/mikolajki/do-50-zl/` is never built (404).
- Why: the strongest query in the research has no page. The planned `/mikolajki/dla-niej/do-50-zl/` targets a narrower variant. Research also shows people type "dla dziewczyny", "dla chłopaka" and "dla kobiety", not "dla niej", so the H1 and intro must carry those variants naturally.
- Fix: decide and log in decyzje.md. One option is an occasion + budget page (`/mikolajki/do-50-zl/`) that collects both people's products, with the per-person budget pages as children. The other is to make `/mikolajki/dla-niej/do-50-zl/` the canonical target and accept the narrower query. Either way, use the variants once each in the intro and FAQ ("dla dziewczyny, żony, koleżanki"), not in a stuffed title.

**H-05: Budget sub-pages are near-duplicates of the parent list (template)**
- Evidence: `[...budzet].astro` gives a budget page the parent's `d.opis` as its meta description, and the parent's whole Markdown intro (`<Content />`), `faq` and `powiazane`. Only the H1 or title suffix and a product subset differ. Thresholds are cumulative (`od: 0` for all), so do-50 ⊂ do-100 ⊂ do-200 ⊂ parent. With at most 12 products, `do-200-zl` will often list exactly the same products as the parent.
- Why: this is the page meant to rank for "prezent na mikołajki dla niej do 50 zł". As built, it would have the same intro, FAQ and description as three sibling URLs, which invites duplicate clustering. Google may pick the parent as canonical and drop the budget page. That is the thin and doorway pattern decyzje.md wants to avoid. The homepage already links the budget pages as the main "Gotowe listy", so they aren't a side pilot any more.
- Fix: in `content.config.ts`, give each entry in `podstronyBudzetu` its own object: `{ slug, tytul, opis, intro (2–4 sentences about what 50 zł buys in these categories), faq[] }`. Fail the build if a budget page has fewer than 3 products. Also fail it, or add `rel=canonical` to the parent, when a budget page's product set equals the parent's or a lower threshold's. Show the budget-specific intro first and the shared intro only as a short line.

**H-06: Every card links to `/prezent/<slug>/` "Szczegóły", which doesn't exist**
- Evidence: `szczegoly={`/prezent/${p.goSlug}/`}` in both list templates. No `src/pages/prezent/` route exists. There is no `links.json` and no `/go/` redirect config in the repo either.
- Why: the first published list will have 4–12 broken internal links and 4–12 "Do sklepu" links that go nowhere. Broken outbound affiliate links on launch day also hurt trust.
- Fix: until PRE-17 builds product pages, drop the `szczegoly` prop. Ship `links.json` and the `/go/` redirect (with noindex and `X-Robots-Tag`) before any list loses `szkic`. Not strictly content, but it blocks content launch.

### Medium

**M-01: Anonymous "zespół" authorship (Expertise)**
- Evidence: "Listy podpisujemy jako zespół". `autor: z.string()` has no link to a profile.
- Fix: name the two people, each with a 2–3 sentence bio covering their gift-giving experience or relevant background, on /o-nas/ with anchors (`/o-nas/#kasper`). Render "Autor: X · Sprawdził: Y", which matches the process (the second partner reviews every list) and makes it visible. Add `Person` in JSON-LD. A first name and a photo are enough. Credentials are not required for gift lists, but an accountable person is.

**M-02: No first-hand experience in the planned product model (Experience)**
- Evidence: the product schema has `nazwa, sklep, cena, sprawdzono, pasuje, goSlug, zdjecie`. The `opis` field listed in the decyzje.md data model is missing. Photos may come only from partner feeds.
- Why: a gift list built from feed photos and a one-line "Pasuje, jeśli" is exactly what the QRG flags in low-effort affiliate pages: no original insight, interchangeable with the shop page.
- Fix: add `opis` (2–3 sentences with concrete facts: capacity, materials, what's in the box, packaging) and an optional `zNaszychRak` or `uwaga` field with one personal observation ("Pudełko jest gotowe do wręczenia, nie trzeba pakować"). For 1–2 products per list, add an own photo or a screenshot of the shop's delivery date. Add `dostawaPrzed` (e.g. "zamów do 3.12, żeby dotarło przed Mikołajkami"). Delivery timing is the most useful fact for a dated occasion, and competitors rarely give it.

**M-03: Dates are free strings, not machine-readable**
- Evidence: `aktualizacja: z.string()` and `sprawdzono: z.string()` render as plain text. The homepage card has "sprawdzone 03.11.2026" with no `<time>`.
- Fix: use `z.coerce.date()`, render `<time datetime="2026-11-20">20.11.2026</time>`, and output `dateModified` in JSON-LD. Seasonal queries reward visible freshness. Consider "Mikołajki 2026" in the intro (not the URL, which stays the same year to year per slugi research).

**M-04: No structured data anywhere**
- Evidence: `structured_data.block_count: 0` on all 7 pages.
- Fix: homepage gets `Organization` (name, url, logo, email, later `sameAs`) and `WebSite`. Lists get `BreadcrumbList` (the crumbs already exist), `ItemList` of `ListItem` (name, position, url anchor), `FAQPage` for the FAQ block (no rich result for commercial sites, but it helps parsing and AI answers), and `WebPage` or `Article` with `author`, `dateModified`, `publisher`. Don't add `Product` with `Offer` or `AggregateRating` unless the price shown is current and the ratings are real.

**M-05: Homepage example card contradicts the "specific, not generic" principle**
- Evidence: the sample card reads "Idealny / dla każdego · jeden uśmiech · sprawdzone 03.11.2026", captioned "Tak wygląda każda propozycja na liście."
- Why: this is the one place a new visitor or rater learns what a "Pasuje, jeśli" looks like. It shows the generic phrase that PRODUCT.md rules out ("konkretnie, komu i dlaczego"). The joke works only once a real list exists to compare against.
- Fix: once the first list is live, swap in a real product card (same component, real `pasuje`). Until then, keep the label "Pasuje, jeśli" with a concrete self-referential line, e.g. "masz okazję za kilka dni i zero pomysłów".

**M-06: Homepage is thin and its title overpromises**
- Evidence: ~273 visible words, mostly navigation. The title says "trafione prezenty na każdą okazję" while the quiz offers only Mikołajki and Święta. Five hobby links and three budget links lead to "w przygotowaniu" pages.
- Fix: add 150–250 words of real content once lists exist: a short "Na Mikołajki w tym roku" block with 3 picks and a one-line reason each, plus the delivery cutoff. Hide catalogue links whose pages have no products (`pusta === true`) rather than linking to placeholders. Keep "na każdą okazję" only if the seasonal limitation is explained, or use "na Mikołajki i Święta" in the H1 or lead for the season.

**M-07: The quiz loops back on itself**
- Evidence: the quiz sends users to list URLs. Each placeholder says "Zajrzyj za kilka dni albo zmień odpowiedzi w quizie" with a "Wróć do quizu" button. /mikolajki/ says "Na razie prezent znajdziesz w quizie".
- Why: a loop with no content for every path signals a non-functional site, which counts against beneficial purpose in the QRG.
- Fix: launch with at least one published list per occasion, and make the quiz skip or label combinations without a list. Or make placeholders point to the nearest published list.

### Low

**L-01:** /o-nas/ uses "np. urodzin mamy" as its example, but those lists were removed on 03.11.2026. Use "np. Mikołajki dla niej".
**L-02:** /o-nas/ says lists have "zwykle od 4 do 8" products, while the schema allows up to 12. Align them or keep 8 as an editorial rule.
**L-03:** The placeholder description generator `${h1}: lista w przygotowaniu.` echoes the title (`description_echoes_title`). This only matters if a placeholder ever loses `noindex`.
**L-04:** Low-severity `brand_suffix_in_description` flags on three trust-page descriptions. Mostly natural usage; optional cleanup.

### Info

**I-01: Affiliate disclosure is done well.** It is above the fold in the list header ("Linki do sklepów są afiliacyjne: płacisz tyle samo…"), in the homepage "Jak to działa" and "Jak zarabiamy" sections, on a dedicated page that explains cookies and windows (30–60 days), and in `rel="sponsored nofollow"` on card links. Keep the list-header line directly above the first product, not only in the footer. Once programs are approved, name the shop on each card (already in `sklep`).
**I-02: Readability and voice are good**, with no AI-generic phrasing detected in the current copy. The trust-page copy is specific (Vercel Analytics hash expiring after 24 h, localStorage key `motyw`). That specificity is the standard the lists should match.
**I-03:** `noindex` on the 29 placeholders is correct. Keep `szkic: true` until a human has verified the prices, as decyzje.md requires.
**I-04:** Content freshness: there is no `Last-Modified` or `dateModified` signal beyond HTTP headers. See M-03.

---

## What the list template needs to rank for "prezent na mikołajki dla niej do 50 zł"

Priority order. Items 1–4 are blockers.

1. **Its own content on the budget page (H-05).** A title like "Prezent na Mikołajki dla niej do 50 zł: 6 pomysłów sprawdzonych w listopadzie". A description that adds information, e.g. "Kosmetyki, perfumetki i drobna biżuteria do 50 zł, z dostawą przed 6 grudnia. Przy każdym: komu pasuje i dlaczego.". An intro specific to the budget: what 50 zł realistically buys in these categories, and a gift-wrapping tip. An FAQ specific to the budget.
2. **At least 5 products**, each with a price that has a date and has really been checked, the shop name, `pasuje`, a 2–3 sentence `opis`, and delivery timing before 6.12 (M-02).
3. **A named author and reviewer, and `<time>` dates** (M-01, M-03).
4. **Working `/go/` links and no 404 "Szczegóły"** (H-06), plus the staleness rule (H-03).
5. **A quotable "W skrócie" block** at the top: 2–3 sentences naming the best overall pick, the best under 30 zł and the safest pick, each with a reason. This is the passage AI Overviews and LLMs lift.
6. **An FAQ that answers real search follow-ups** in 1–3 sentences each: "Co kupić dziewczynie na Mikołajki do 50 zł?", "Do kiedy zamówić, żeby dotarło przed 6 grudnia?", "Prezent dla koleżanki z pracy na Mikołajki do 50 zł?" and "Czy da się kupić coś na ostatnią chwilę (bon, przeżycie)?". Prezentokracja vouchers suit that last one.
7. **Natural query variants** used once each in the intro and FAQ: dla dziewczyny, dla żony, dla kobiety, dla koleżanki, do 30 zł. No stuffing, per the decyzje.md rule.
8. **Schema**: BreadcrumbList, ItemList, FAQPage, WebPage with author and dateModified (M-04).
9. **Internal links**: from the homepage "Gotowe listy" with a real count, sibling budgets (already in `.budgets`), the parent `/mikolajki/dla-niej/`, the opposite person (`/mikolajki/dla-niego/do-50-zl/`), and Święta dla niej (seasonal continuation). `powiazane` currently filters to lists sharing the occasion or person, which is good, but it links only to parent lists, never to budget pages.
10. **A unique "why" per product across lists.** If the same perfume sits on Mikołajki dla niej and Święta dla niej, write a different `pasuje` for each occasion. Otherwise the cross-page repetition is the AI-content marker the QRG lists ("repetitive structure across pages").
11. **The AI-use note decided (PRE-8)** and shown once per list in the byline area, if the decision is to show it.

---

## AI citation readiness: 18/100

- The extractor recovers only 383 characters of the homepage main content. There are no factual sentences to quote, only labels and link lists.
- No JSON-LD, so no `Organization` entity to attribute a quote to.
- Good basis: `<main>`, a clear H1→H2→H3 hierarchy, FAQ planned as static `<details>` in the HTML (no JS needed), prices as numbers.
- Needed: the "W skrócie" summary (template item 5), FAQ answers that work as standalone sentences, dated price statements ("Cena 49 zł, sprawdzona 20.11.2026"), named authors, and Organization schema.

---

## Structured findings (for audit-data.json, category "Content Quality")

```json
{
  "category": "Content Quality",
  "score": 36,
  "subscores": {"eeat": 32, "experience": 20, "expertise": 35, "authoritativeness": 15, "trustworthiness": 50, "ai_citation_readiness": 18, "list_template_readiness": 55},
  "metadata_template": {"site_risk": "low", "templated_ratio": 0.0, "shared_cta_phrases": {}, "pages_checked": 7},
  "findings": [
    {"id": "C-01", "severity": "Critical", "title": "Operator/data-controller identity is a placeholder on /kontakt/ and /polityka-prywatnosci/", "urls": ["/kontakt/", "/polityka-prywatnosci/"], "fix": "Publish name/business name, address, NIP (if any) from one shared source"},
    {"id": "H-01", "severity": "High", "title": "Homepage shows [N] propozycji and 'zdjęcie' placeholders linking to empty lists", "urls": ["/"], "fix": "Hide or mark unpublished lists; compute N from data"},
    {"id": "H-02", "severity": "High", "title": "Bracket placeholders and ticket IDs on trust pages", "urls": ["/o-nas/", "/jak-zarabiamy/", "/polityka-prywatnosci/"], "fix": "Fill in; decide PRE-8; add build check for [DATA]/[DO ...] patterns"},
    {"id": "H-03", "severity": "High", "title": "30-day stale-price rule promised on /o-nas/ but not implemented", "urls": ["/o-nas/"], "fix": "Implement in ProductCard with date type plus scheduled rebuild, or soften the claim"},
    {"id": "H-04", "severity": "High", "title": "P1 #1 keyword URL /mikolajki/do-50-zl/ has no route", "urls": ["/mikolajki/do-50-zl/"], "fix": "Decide target URL for occasion+budget queries; log in decyzje.md"},
    {"id": "H-05", "severity": "High", "title": "Budget sub-pages inherit parent description, intro, FAQ; cumulative thresholds create duplicate product sets", "urls": ["/mikolajki/dla-niej/do-50-zl/"], "fix": "Per-budget tytul/opis/intro/faq in schema; fail build or canonicalise on identical sets"},
    {"id": "H-06", "severity": "High", "title": "Cards link to non-existent /prezent/<slug>/; no /go/ mapping in repo", "urls": [], "fix": "Remove szczegoly until PRE-17; ship links.json and /go/ before first list"},
    {"id": "M-01", "severity": "Medium", "title": "Anonymous team authorship", "fix": "Named author + reviewer with short bios and Person schema"},
    {"id": "M-02", "severity": "Medium", "title": "Product model lacks opis, first-hand note, delivery timing", "fix": "Add opis, own observation, dostawaPrzed fields"},
    {"id": "M-03", "severity": "Medium", "title": "Dates are strings, not <time>/dateModified", "fix": "z.coerce.date, <time datetime>, JSON-LD dateModified"},
    {"id": "M-04", "severity": "Medium", "title": "No structured data on any page", "fix": "Organization, WebSite, BreadcrumbList, ItemList, FAQPage, WebPage"},
    {"id": "M-05", "severity": "Medium", "title": "Example card 'Idealny dla każdego' shows the generic phrasing the product rules forbid", "urls": ["/"], "fix": "Replace with a real or specific example"},
    {"id": "M-06", "severity": "Medium", "title": "Homepage thin (~273 words) and title says 'na każdą okazję' with 2 occasions", "urls": ["/"], "fix": "Seasonal picks block; hide empty catalogue links"},
    {"id": "M-07", "severity": "Medium", "title": "Quiz and placeholders loop back to each other", "fix": "Publish at least one list per occasion or redirect to the nearest list"},
    {"id": "L-01", "severity": "Low", "title": "/o-nas/ example 'urodzin mamy' is stale"},
    {"id": "L-02", "severity": "Low", "title": "/o-nas/ '4 do 8' vs schema max 12"},
    {"id": "L-03", "severity": "Low", "title": "Placeholder description echoes title"},
    {"id": "L-04", "severity": "Low", "title": "brand_suffix_in_description on 3 trust pages (mostly natural)"},
    {"id": "I-01", "severity": "Info", "title": "Affiliate disclosure is clear and well placed"},
    {"id": "I-02", "severity": "Info", "title": "Polish readability good; no generic AI phrasing in current copy"},
    {"id": "I-03", "severity": "Info", "title": "noindex on placeholders is correct"}
  ]
}
```
