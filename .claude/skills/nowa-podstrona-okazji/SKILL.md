---
name: nowa-podstrona-okazji
description: Dodanie nowej podstrony okazji prezentw30s.pl (lista /okazja/osoba/, np. /urodziny/dla-mamy/). Użyj, gdy ktoś prosi o nową listę prezentów, podstronę okazji, kombinację okazja + osoba albo zadanie z projektu „Treści: podstrony okazji”.
---

# Nowa podstrona okazji

Szablon to `src/pages/[okazja]/[osoba]/[...budzet].astro`. Każdy plik `src/content/listy/<okazja>-<osoba>.md` daje jedną stronę `/<okazja>/<osoba>/`. Kodu strony nie zmieniasz. Zmiana wyglądu szablonu to osobne zadanie i idzie przez skill `impeccable`.

## Kroki

1. Sprawdź, czy kombinacja jest na liście fraz w `docs/slowa-kluczowe.md`. Nie robimy stron „na zapas” (ryzyko thin content / doorway pages, `docs/decyzje.md`).
2. Sprawdź, czy slugi okazji i osoby są w `src/data/katalog.ts`. Nowy slug dodaj tam (schemat kolekcji w `src/content.config.ts` czyta je z tego pliku), a w razie wątpliwości zapytaj.
3. Skopiuj `src/content/listy/urodziny-dla-mamy.md` jako wzór i wypełnij pola:
   - `tytul` (do `<title>`, kończy się na `| prezentw30s.pl`), `opis` (meta description, 1–2 zdania), `h1`.
   - `autor`: prawdziwe imię osoby, która wybrała produkty. `aktualizacja`: data ostatniego przeglądu.
   - `produkty`: 4–8 (maks. 12). Każdy ma `nazwa`, `sklep`, `cena` (liczba w zł, np. `89`; z niej liczy się suwak ceny), `sprawdzono` (data weryfikacji ceny), `pasuje` (jedno zdanie: komu i dlaczego) i `goSlug`. Opcjonalnie `zdjecie` (`src` = URL z feedu partnera, `alt`).
   - `podstronyBudzetu` (opcjonalnie, np. `[do-100-zl]`): dodaje podstronę `/<okazja>/<osoba>/do-100-zl/` z produktami w tym budżecie. Progi są w `budzety` w `src/data/katalog.ts`. Dodawaj tylko wtedy, gdy w budżecie są co najmniej 3 produkty, bo mniejsza podstrona dostaje `noindex`.
   - `faq`: 2–5 pytań, które ludzie naprawdę zadają.
   - Treść pod frontmatterem to wstęp: 2–4 zdania na „Ty”.
4. Zostaw `szkic: true`, dopóki człowiek nie sprawdzi faktów, cen i dostępności. Szkic buduje się na podglądzie Vercela, ale ma `noindex`. Przed merge'em usuń z pliku `szkic: true` i przykładowe produkty.
5. Uruchom `npm run check` i `npm run build`, potem obejrzyj stronę w `npm run dev`. Sekcja „Powiązane listy” sama pokaże inne istniejące listy z tą samą okazją albo osobą.

## Zasady treści

- Nie wymyślaj cen, opinii, popularności ani zdjęć. Jeśli nie masz danych, wpisz placeholdery `[DATA]`, `[IMIĘ]`. Cena musi być liczbą, więc bez prawdziwej ceny produkt nie trafia na listę.
- Tylko „Pasuje, jeśli”. Strona nie mówi o odpuszczaniu ani nie zniechęca do produktów.
- Linki do sklepów tylko przez `goSlug` (`/go/<slug>`), nigdy bezpośrednio. Mapowanie w `links.json` (PRE-15).
- Bez keyword stuffingu. Bez alkoholi.
- Tekst pisany z AI przegląda człowiek przed merge'em (PRE-12). Przed PR-em uruchom skill `przeglad-afiliacji`.
