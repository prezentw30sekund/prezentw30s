# Plan działań SEO – prezentw30s.pl (04.11.2026, pełny audyt)

Kolejność uwzględnia zależności: najpierw to, co blokuje start, potem to, co sprawia, że opublikowane listy będą widoczne.

## Critical – do 15.11
1. **Dane operatora na `/kontakt/` i `/polityka-prywatnosci/`** (nazwa, adres, NIP; UŚUDE art. 5, RODO art. 13). Z jednego źródła w repo. *Jak sprawdzić:* brak „do uzupełnienia” na obu stronach.
2. **Pierwsze 3–6 list mikołajkowych z produktami, bez `noindex`** (PRE-22, PRE-17). Zależy od: `/go/` (PRE-15) i decyzji o stronach `/prezent/<slug>/`. *Jak sprawdzić:* listy w mapie strony i w Search Console jako „Zaindeksowana”.
3. **Strona główna bez placeholderów**: ukryć „Gotowe listy” albo liczyć „[N]” z danych; usunąć pola „zdjęcie”. *Jak sprawdzić:* brak „[N]” w HTML produkcji.

## High – w tym tygodniu
4. `public/robots.txt` (`Disallow: /go/`, linia `Sitemap:`) i mapa strony z samymi stronami indeksowalnymi (`src/data/indexable.ts` + `src/pages/sitemap.xml.ts`), test w CI. (PRE-19) **Zrobione 05.11 (PRE-36): `public/robots.txt` i `sitemap.xml` generowana po buildzie ze wszystkich stron bez `noindex`; build przerywa się, gdy mapa wyszłaby pusta.**
5. Zgłoszenie domeny i mapy w Google Search Console i Bing Webmaster Tools. (PRE-19) **Częściowo 04.11: domena zweryfikowana w Search Console i Bing Webmaster Tools; zostaje zgłoszenie mapy strony, gdy powstanie.**
6. Uzupełnić placeholdery stron zaufania (`[DATA]`, lista programów, oznaczenie treści AI – PRE-8) i zdjąć z nich `noindex`; test w buildzie na nawiasy typu `[DATA]`.
7. JSON-LD: `WebSite` + `Organization` w `Base.astro`, `BreadcrumbList` na listach (kod w findings/schema.md); przygotować logo PNG 512×512. **Zrobione 04.11 (PRE-37): `WebSite` + `Organization` z logo i e-mailem na stronie głównej, `BreadcrumbList` na listach bez `noindex`, `public/logo-512.png`. Zostaje `BreadcrumbList` na hubach po zdjęciu z nich `noindex`.**
8. Podstrony budżetu z własnym tytułem, opisem, wstępem i FAQ; `noindex` albo canonical do rodzica, gdy zestaw produktów jest taki sam.
9. Obietnica o cenach po 30 dniach z `/o-nas/`: wdrożyć w `ProductCard` albo złagodzić zdanie.
10. Nagłówki bezpieczeństwa w `vercel.json` (CSP najpierw Report-Only). **Zrobione 04.11 (PRE-37, `feature/dago/pre-37`, CSP w trybie Report-Only).**

## Medium – w ciągu miesiąca
11. `og:image` (1200×630), `og:url`, `og:type`, `twitter:card`; własna `404.astro`. **Zrobione 04.11 (PRE-37: `og:image`, `twitter:card`; PRE-38: `og:url`, `og:type`, `404.astro`).**
12. `"trailingSlash": true` w `vercel.json` i przekierowanie `/index.html` → `/`. **Zrobione 04.11 (PRE-38), do sprawdzenia na podglądzie Vercela.**
13. Szablon list: tytuł z liczbą propozycji i rokiem, 40–60 słów bezpośredniej odpowiedzi pod H1, autor i data w `<time>`, FAQ z prawdziwych pytań (terminy dostawy przed 6.12 i 24.12), blok „Na ostatnią chwilę”. **Szablon zrobiony 04.11 (PRE-38); wstęp 40–60 słów, FAQ i terminy dostawy dochodzą z treścią list (skill `nowa-podstrona-okazji`).**
14. `ItemList` na listach (adresy własnych stron, nigdy `/go/`).
15. Adres `/mikolajki/do-50-zl/` z listy słów kluczowych: zdecydować, czy powstaje (dziś 404).
16. Tytuł strony głównej do ok. 55 znaków, opis do ok. 150. **Zrobione 04.11 (PRE-38).**
17. Fonty: Shantell Sans tylko z osią wagi albo zawężona do łaciny z polskimi znakami, `preload` 1–2 plików, bez zbędnych `woff` Figtree. **Zrobione 04.11 (PRE-38): `src/styles/fonty.css`, Shantell z osiami `INFM` i `BNCE` zawężony do łaciny, dodany brakujący podzbiór `latin` Figtree.**
18. Link „Jak zarabiamy” w pasku afiliacji i logo w nagłówku do ≥ 44 px wysokości. **Zrobione 04.11 (PRE-38).**

## Low – backlog
19. Zawęzić `image.remotePatterns` do hostów partnerów.
20. Autor z imienia zamiast „zespół”.
21. Usunąć pusty odstęp pod „Wolę przeglądać katalog”; stopka na krótkich stronach.
22. Plan linków zwrotnych z findings/backlinks.md (po starcie list).
23. Ponowny audyt ok. 2 tygodnie po starcie list; potem Vercel Speed Insights i CrUX.

## Wskaźniki do obserwowania bez ponownego audytu
- Liczba stron „Zaindeksowana” w Search Console (cel: listy mikołajkowe przed 25.11).
- Wyświetlenia fraz typu „prezent na mikołajki dla niej do 50 zł” w Search Console.
- Kliknięcia `/go/` w Vercel Analytics.
