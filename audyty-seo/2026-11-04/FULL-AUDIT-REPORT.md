# Pełny audyt SEO prezentw30s.pl – 04.11.2026

Zakres: produkcja `https://prezentw30s.pl` (stan `main` po PR #13), 30 stron z linków wewnętrznych. 10 analiz specjalistycznych (technika, treść, schema, mapa strony, wydajność, wygląd i mobile, wyszukiwarki AI, gotowość dla agentów, doświadczenie wyszukiwania, linki zwrotne). Szczegóły każdej części: `findings/*.md`, zrzuty ekranu: `screenshots/`.

Brak danych z Google Search Console, CrUX, GA4, Matomo i Moz (nic nie jest podpięte); Lighthouse lokalny, bo PageSpeed Insights odrzucił zapytania (limit bez klucza API).

## Podsumowanie

**SEO Health Score: 49/100**

| Kategoria | Waga | Wynik |
|---|---|---|
| Technical SEO | 22% | 62 |
| Content Quality | 23% | 36 |
| On-Page SEO | 20% | 55 |
| Schema / Structured Data | 10% | 8 |
| Performance (CWV) | 10% | 94 |
| AI Search Readiness | 10% | 35 |
| Images | 5% | 40 |

Typ serwisu: afiliacyjny katalog prezentów, przed startem. Strona jest szybka, poprawna technicznie i dobrze działa na telefonie. Słaby wynik bierze się z braku treści do zaindeksowania, z placeholderów widocznych publicznie i z braków formalnych (dane operatora, robots.txt, mapa strony, schema).

**Okno czasowe:** Mikołajki są za 32 dni. Artykuły, które rankują na te frazy, pojawiają się zwykle 25.11–1.12, a nowa domena potrzebuje czasu na indeksację. Listy mikołajkowe powinny być publiczne i indeksowalne do ok. 15–20.11.

**Szansa:** konkurencja w wynikach jest słaba. Ok. 76% wyników to listy prezentowe sklepów i portali, wiele z lat 2017–2021, bez cen, zdjęć i bez wyjaśnienia, komu prezent pasuje. Świeże listy z „Pasuje, jeśli” mają tu realną przewagę (findings/sxo.md).

### Najważniejsze problemy
1. **Brak danych operatora (Critical, prawne).** `/kontakt/` i `/polityka-prywatnosci/` pokazują „[NAZWA LUB IMIĘ I NAZWISKO, ADRES, NIP: do uzupełnienia]”. Wymagają tego UŚUDE art. 5 i RODO art. 13; strony są w stopce indeksowanej strony głównej.
2. **Brak treści do zaindeksowania przed sezonem (Critical).** 29 z 30 stron ma `noindex`, listy nie mają produktów; każdy wynik quizu i każda karta „Gotowe listy” kończy się na „w przygotowaniu”.
3. **Placeholdery widoczne publicznie (High).** Strona główna: 6× „[N] propozycji” i 6× pole „zdjęcie”. Strony zaufania: `[DATA]`, `[LISTA PROGRAMÓW… PRE-23]`, `[OZNACZENIE… PRE-8]`, `[DO WERYFIKACJI…]`.
4. **Brak robots.txt i mapy strony (High).** Oba adresy zwracają 404.
5. **Brak danych strukturalnych (High).** Zero JSON-LD na całej stronie.

### Szybkie zyski
1. `public/robots.txt` + mapa strony (poniżej godziny).
2. Ukryć „Gotowe listy” do czasu publikacji list albo liczyć „[N]” z danych.
3. Uzupełnić dane operatora i placeholdery na stronach zaufania, potem zdjąć z nich `noindex` (1–2 godziny).
4. JSON-LD `WebSite` + `Organization` w `Base.astro` (gotowy kod w findings/schema.md).
5. `og:image`, `og:url`, `og:type`, `twitter:card` w `Base.astro` i własna strona 404.

## Technical SEO – 62/100 (findings/technical.md, findings/sitemap.md)

Działa: HTTPS, `http`→`https` jednym 308, `www`→bez `www` jednym 301, canonical bezwzględny i ze ukośnikiem, statyczny HTML, `lang="pl"`, viewport.

- **High – brak `robots.txt` i mapy strony.** Szkic robots.txt: `Allow: /`, `Disallow: /go/`, linia `Sitemap:`. Nie blokować stron z `noindex` w robots.txt, bo Google musi zobaczyć tag.
- **High – mapa strony musi pomijać strony `noindex`.** `@astrojs/sitemap` domyślnie dołączy wszystkie zbudowane adresy, także 32 kombinacje „w przygotowaniu”, a jego filtr widzi tylko URL. Rekomendacja: jedna funkcja `src/data/indexable.ts` z regułą indeksowania (nie szkic, podstrona budżetu ≥ 3 produkty), używana i przez strony, i przez prosty endpoint `src/pages/sitemap.xml.ts`. Plus test w CI: żaden adres z mapy nie ma `noindex`.
- **High – tylko HSTS z nagłówków bezpieczeństwa.** Brak CSP, `X-Content-Type-Options`, ochrony ramek, `Referrer-Policy`, `Permissions-Policy`; HTML wysyła `access-control-allow-origin: *`. Dodać w `vercel.json`, CSP zacząć od trybu Report-Only (jest skrypt inline motywu).
- **Medium – duplikaty adresów zwracają 200.** `/jak-zarabiamy` (bez ukośnika) i `/index.html` nie przekierowują. Canonical to łagodzi; lepiej `"trailingSlash": true` w `vercel.json` i przekierowanie `/index.html` → `/`.
- **Medium – domyślna strona 404 Vercela.** Dodać `src/pages/404.astro`.
- **Medium – `noindex` ustawiany ręcznie.** Powiązać go z liczbą produktów, żeby strona sama stawała się indeksowalna.
- **Low** – `image.remotePatterns` dopuszcza każdy host https; linki afiliacyjne bez `rel="sponsored"` (do sprawdzenia, gdy powstanie `/go/`).

## Content Quality – 36/100 (findings/content.md)

E-E-A-T 32/100 (Experience 20, Expertise 35, Authoritativeness 15, Trust 50).

Działa: czytelne oznaczenie afiliacji, dobry polski (10–13 słów w zdaniu, bez typowych fraz AI), `noindex` na placeholderach.

- **Critical – brak danych operatora** (patrz wyżej).
- **High – placeholdery** na stronie głównej i stronach zaufania; dodać test w buildzie, który nie przepuszcza nawiasów kwadratowych typu `[DATA]`.
- **High – podstrony budżetu kopiują listę nadrzędną.** Szablon daje `/mikolajki/dla-niej/do-50-zl/` ten sam opis, wstęp i FAQ co rodzic. Progi są narastające, więc „do 200 zł” często pokaże dokładnie te same produkty. Potrzebny własny tytuł, opis, wstęp i FAQ podstrony, a przy identycznym zestawie produktów `noindex` albo canonical do rodzica.
- **High – obietnica bez pokrycia w kodzie.** `/o-nas/` mówi, że po 30 dniach cena zmienia się na „Sprawdź aktualną cenę w sklepie”; nic w `src/` tego nie robi. Wdrożyć w `ProductCard` albo złagodzić zdanie.
- **High – brakujące adresy docelowe.** Najważniejsza fraza z `docs/slowa-kluczowe.md` ma adres `/mikolajki/do-50-zl/`, który zwraca 404. Linki „Szczegóły” prowadzą do nieistniejących `/prezent/<slug>/`, a `/go/` i `links.json` jeszcze nie istnieją (PRE-15).
- **Medium** – autor podpisany tylko „zespół”; daty jako zwykły tekst zamiast `<time>`; przykładowa karta na stronie głównej mówi „Idealny dla każdego” (ogólnik, którego PRODUCT.md unika); strona główna ma ok. 273 słowa.

## On-Page SEO – 55/100

- Tytuły i opisy unikalne, jeden H1 na stronę, poprawna hierarchia nagłówków.
- **Medium – tytuł strony głównej ma 73 znaki** (Google ucina ok. 60).
- **Medium – szablon tytułu list** nie ma liczby propozycji ani roku; wyniki w Google wyglądają typowo jak „Prezent na Mikołajki dla niej do 50 zł: 8 pomysłów na 2026” (findings/sxo.md).
- **Medium – strona główna linkuje do ok. 28 stron `noindex`.**
- **Low – opis strony głównej ma 99 znaków.**

## Schema / Structured Data – 8/100 (findings/schema.md)

- **High** – brak `WebSite` + `Organization` (strona główna) i `BreadcrumbList` (huby i listy). Gotowy kod jest w findings/schema.md. Uwaga: zawiera placeholder adresu e-mail i wskazuje `/logo-512.png`, którego jeszcze nie ma.
- **Medium** – brak `ItemList` na listach (pozycja, nazwa, adres własnej strony `/prezent/<slug>/`, nigdy `/go/`).
- **Rekomendacja dla serwisu afiliacyjnego:** nie dodawać `Product` + `Offer` na listach (ryzyko kary za niezgodny markup i nieaktualne ceny). Jeśli kiedyś, to tylko na stronach `/prezent/<slug>/`, sprzedawcą jest sklep, cena w PLN i automatyczne usuwanie oferty po przekroczeniu daty weryfikacji.
- **Info** – FAQ jako widoczny HTML jest w porządku; Google nie pokazuje już wyników rozszerzonych FAQ, więc nie dodawać `FAQPage` dla Google.

## Performance – 94/100 (findings/performance.md)

Lighthouse lokalny (symulowane łącze), bez danych od użytkowników:

| Strona | Profil | Perf | LCP | TBT | CLS |
|---|---|---|---|---|---|
| Strona główna | mobile | 100 (raz 90, szum) | 0,8–0,9 s | 0 ms | 0–0,001 |
| Strona główna | desktop | 100 | 0,2 s | 0 ms | 0,027 |
| Lista | mobile | 100 | 0,8 s | 0 ms | 0,027 |
| Lista | desktop | 100 | 0,3 s | 0 ms | 0,004 |

TTFB 150–180 ms, Brotli, `/_astro/*` z cache na rok. Ok. 265 KiB na stronę, z czego ok. 240 KiB to fonty.

- **Medium** – Shantell Sans w pełnej wersji (latin 171 KB, latin-ext 69 KB). Wziąć wariant tylko z osią wagi albo zawęzić do znaków łacińskich z polskimi; latin-ext zostaje, bo są w nim ą i ł.
- **Low** – brak `preload` fontów; CLS 0,027 od podmiany fontu (dużo poniżej progu 0,1); dwa małe arkusze CSS blokujące render; zbędne pliki `woff` Figtree.

## AI Search Readiness – 35/100 (findings/geo.md, findings/agentic.md)

- Roboty AI (OAI-SearchBot, GPTBot, Claude-SearchBot, ClaudeBot, PerplexityBot, CCBot) dostają 200 – dostęp jest, ale nie ma czego cytować.
- Gotowość dla agentów 100/100 w teście drzewa dostępności: quiz to prawdziwe przyciski z nazwami, `aria-pressed` i obszarem `aria-live`; agent przejdzie quiz albo pójdzie od razu statycznymi linkami. Lighthouse „Agentic Browsing” niezmierzony (limit PageSpeed).
- **High** – zgłosić stronę i mapę także w Bing Webmaster Tools (Bing zasila ChatGPT i Copilot).
- **Medium** – jedno zdanie bezpośredniej odpowiedzi pod H1 listy (40–60 słów: najlepsze propozycje i zakres cen), widoczny autor i data w `<time>`, FAQ z prawdziwymi pytaniami (np. „Co kupić dziewczynie na Mikołajki do 50 zł?”, terminy dostawy przed 6.12 i Wigilią).
- **Low** – `llms.txt` opcjonalny (Google go nie czyta); WebMCP i Markdown to szanse, nie braki.

## Images – 40/100

- Brak obrazów na stronach, brak `og:image`, pola „zdjęcie” jako placeholdery na stronie głównej.
- Na listach zdjęcia mają `alt` w schemacie i idą przez `<Image />` – zgodnie z decyzje.md.

## Wygląd i mobile (findings/visual.md)

Wynik 86/100, bez poważnych problemów: quiz jest pierwszy na ekranie telefonu, nic nie wychodzi poza ekran, tryb ciemny działa.

- **Low-Medium** – link „Jak zarabiamy” w pasku afiliacji ma 98×18 px (zasada projektu: ≥ 44 px).
- **Low** – logo w nagłówku 197×40 px; ok. 90 px pustego odstępu pod „Wolę przeglądać katalog”; na stronach „w przygotowaniu” stopka wisi w połowie ekranu telefonu.

## Linki zwrotne (findings/backlinks.md)

Bez wyniku: domena jest za nowa dla Common Crawl, a płatnych źródeł nie ma. W pliku jest plan startowy zgodny z regulaminem webePartners (Search Console i Bing, artykuły prezentowe jako treść do linkowania, kontakt z polskimi blogerami przed sezonem, bez kupowania linków).

## Rekomendacje sprzeczne z decyzjami zespołu

Część analiz proponuje rzeczy, które zespół już odrzucił. Nie wpisuję ich do planu:

- **„Nie pasuje, jeśli” przy produkcie** (findings/geo.md) – decyzja z 31.10.2026: strona nie mówi o odpuszczaniu.
- **Tabela porównawcza na liście** (findings/geo.md) – odrzucona 31.10.2026, dublowała karty.
- **`Product` + `Offer` w JSON-LD list** (findings/geo.md) – sprzeczne z zaleceniem findings/schema.md; idziemy za schema.md.
- **„Znajomy z pracy, do 50 zł”** (findings/sxo.md) – w wynikach jest na to popyt, ale kategoria jest tymczasowo poza quizem (PRE-32). Do rozważenia przy powrocie do pełnej listy.

## Ograniczenia

- Brak danych od użytkowników (CrUX, GA4) i z Search Console; wydajność to pomiar laboratoryjny.
- Wyniki wyszukiwania z WebSearch, nie z google.pl na żywo (bez reklam, Shopping, „Podobne pytania”, AI Overview).
- Lighthouse „Agentic Browsing” niezmierzony (limit PageSpeed bez klucza API).
- Wynik On-Page i Images to ocena ręczna; pozostałe kategorie z analiz specjalistycznych.
