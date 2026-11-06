# Schema / structured data audit: prezentw30s.pl (2026-11-04)

Score: 8/100 (no markup at all; site is pre-launch, so this is a build gap, not a regression).

## Detection (/, /mikolajki/, /mikolajki/dla-niej/do-50-zl/, /o-nas/, /kontakt/)
- JSON-LD: none. Microdata: none. RDFa: none.
- Base.astro has title, description, canonical (absolute, from Astro.site), og:title/description/locale. Missing: og:image, og:url, og:type, twitter tags.
- Breadcrumbs exist only as HTML (`nav.crumbs > ol`), no BreadcrumbList.
- All sampled non-home pages currently serve `noindex` (hubs, list, trust pages). Fine pre-launch; schema is moot until noindex is removed. Remove noindex from trust pages and hubs at launch.
- /robots.txt returns 404 (public/ holds only favicon.svg). Not schema, but add robots.txt + sitemap.
- Template: lists get FAQ (`d.faq`), `ProductCard` with `szczegoly=/prezent/<goSlug>/`, price in PLN (`p.cena`).

## Findings
1. High: no Organization/WebSite on home. 
2. High: no BreadcrumbList on hubs/lists (Google still shows breadcrumbs; mobile shows them as domain path).
3. Medium: no ItemList on list pages (not a rich result by itself, but helps machine understanding).
4. Info: FAQ present in template. FAQPage rich results retired for all sites (May 2026): do NOT add FAQPage for SERP; optional only if you accept unconfirmed AI benefit. Keep the visible FAQ for users.
5. Info: no Product/Offer is correct to avoid for now (see caveats).

## Implementation plan
Base.astro: add optional prop `schema?: object | object[]` and render
`<script type="application/ld+json" set:html={JSON.stringify(schema)} />` in head (escape `<` via `.replace(/</g,'\\u003c')`). Pass from pages. Build everything from the same data that renders the HTML so the markup matches visible content.

### 1. WebSite + Organization (homepage only)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://prezentw30s.pl/#organization",
      "name": "prezentw30s.pl",
      "alternateName": "Prezent w 30 sekund",
      "url": "https://prezentw30s.pl/",
      "logo": { "@type": "ImageObject", "url": "https://prezentw30s.pl/logo-512.png", "width": 512, "height": 512 },
      "email": "REPLACE_WITH_REAL_CONTACT_EMAIL",
      "contactPoint": { "@type": "ContactPoint", "contactType": "customer support", "email": "REPLACE_WITH_REAL_CONTACT_EMAIL", "availableLanguage": "pl", "url": "https://prezentw30s.pl/kontakt/" }
    },
    {
      "@type": "WebSite",
      "@id": "https://prezentw30s.pl/#website",
      "url": "https://prezentw30s.pl/",
      "name": "Prezent w 30 sekund",
      "alternateName": "prezentw30s.pl",
      "inLanguage": "pl-PL",
      "publisher": { "@id": "https://prezentw30s.pl/#organization" }
    }
  ]
}
```
Notes: logo must be a raster (PNG/JPG/WebP, min 112x112); favicon.svg is not suitable, create one. Fill in the email and remove the `email`/`contactPoint` keys if you do not want to publish one (no placeholders may ship). Add `sameAs` only for real social profiles. No SearchAction (sitelinks search box retired).

### 2. BreadcrumbList (list and hub pages)
Mirror the HTML crumbs exactly. Example for /mikolajki/dla-niej/do-50-zl/:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://prezentw30s.pl/" },
    { "@type": "ListItem", "position": 2, "name": "Mikołajki", "item": "https://prezentw30s.pl/mikolajki/" },
    { "@type": "ListItem", "position": 3, "name": "Dla niej", "item": "https://prezentw30s.pl/mikolajki/dla-niej/" },
    { "@type": "ListItem", "position": 4, "name": "Do 50 zł", "item": "https://prezentw30s.pl/mikolajki/dla-niej/do-50-zl/" }
  ]
}
```
Astro sketch in [...budzet].astro (after `listaUrl`, `okazja`, `budzet` exist):
```js
const base = 'https://prezentw30s.pl';
const trail = [['Strona główna','/'],[okazja.nazwa,`/${okazja.slug}/`],[osobyKatalog[osobaSlug!],listaUrl],...(budzet?[[budzet.nazwa,`${listaUrl}${budzet.slug}/`]]:[])];
const breadcrumb = { '@context':'https://schema.org','@type':'BreadcrumbList',
  itemListElement: trail.map(([name,p],i)=>({'@type':'ListItem',position:i+1,name,item:base+p})) };
```
Emit only when `!noindex`. Hubs (/mikolajki/, /dla-niej/ ...) get the same pattern with 2-3 items. Trust pages: optional 2-item crumb.

### 3. ItemList for product lists
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Prezent na Mikołajki dla niej do 50 zł",
  "url": "https://prezentw30s.pl/mikolajki/dla-niej/do-50-zl/",
  "numberOfItems": 2,
  "itemListOrder": "https://schema.org/ItemListUnordered",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "NAZWA PRODUKTU 1", "url": "https://prezentw30s.pl/prezent/SLUG-1/" },
    { "@type": "ListItem", "position": 2, "name": "NAZWA PRODUKTU 2", "url": "https://prezentw30s.pl/prezent/SLUG-2/" }
  ]
}
```
(Generate from `produkty`; the names/slugs above are template values filled by code, not literal.)
Rules:
- `url` must point to your own indexable page (`/prezent/<slug>/`), never to `/go/slug` (affiliate redirect) or to the shop. Use Google's carousel-style ItemList only with URLs on your own domain.
- Keep it minimal: position, name, url. Optionally `image` (absolute URL).
- Respect the budget filter: list only products actually rendered on that page. The JS price slider only hides cards; markup should list the full server-rendered set, which matches the no-JS HTML.
- Only if `/prezent/<slug>/` pages exist and are indexable.

### Product/Offer caveats for an affiliate site that does not sell
- Safe: ItemList above; Article/WebPage/CollectionPage on lists; BreadcrumbList; Organization/WebSite.
- Risky: `Product` + `Offer` with price. Google's merchant/product snippet guidance expects the page to let users buy or to be a genuine review; an affiliate list marked up as sold offers risks a spammy structured data manual action (markup not matching page purpose, price stale vs. shop).
- Prices change; shop price is controlled by the merchant. Rendered "cena + data weryfikacji" is fine as visible text ("cena z 2026-11-04"), but do not mark it as a live Offer. If you later add Product on `/prezent/<slug>/` detail pages, do it only with: real editorial review content, `offers.price` + `priceCurrency: "PLN"` + `priceValidUntil` short, `availability` omitted unless checked, `seller` = shop (not you), `url` = the product page, and a build-time check that fails when verification date is older than N days (suggest 14-30), at which point drop the Offer. Never use AggregateRating/Review unless it is your own genuine, visible review; never copy shop ratings.
- Alternative lower-risk option: `Product` without `offers` (name, image, description) inside the detail page, no price in markup, price only in visible text.
- Affiliate links: keep `rel="sponsored nofollow"` on /go/ links (HTML, not schema); disclosure lives on /jak-zarabiamy/.

### Other types
- Lists: add `CollectionPage`/`WebPage` with `dateModified` = latest verification date (ISO 8601, e.g. "2026-11-04") and `isPartOf` {"@id": ".../#website"}. Optional, low value.
- /o-nas/: `AboutPage`; /kontakt/: `ContactPage` (optional, no rich result). Only after real team/contact data exist.
- Author Person markup only if real named authors are published (E-E-A-T fit with "O nas jako zespół"). No placeholders.
- FAQ: leave as visible HTML only. If it is genuine user Q&A use QAPage; editorial FAQ should not get FAQPage for Google.
- Never use HowTo or SpecialAnnouncement.

## Validation checklist for generated blocks
@context https://schema.org: yes. Absolute URLs: yes. No placeholders: email and logo URL must be filled before shipping. Validate with Rich Results Test (BreadcrumbList) and validator.schema.org (rest) after deploy; add a CI/build assertion that each JSON-LD parses.

## Structured findings
{"category":"Schema / Structured Data","score":8,"detected":[],"issues":[{"p":"high","t":"No Organization/WebSite"},{"p":"high","t":"No BreadcrumbList"},{"p":"medium","t":"No ItemList"},{"p":"low","t":"No og:image, robots.txt, sitemap"},{"p":"info","t":"FAQ HTML present; FAQPage rich results retired"}]}
