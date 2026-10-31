# Layout – do zrobienia

Stan na 31.10.2026. Strona główna działa w Astro (`src/pages/index.astro`) w stylu „Rada na serwetce”, system wizualny w `DESIGN.md`. Historia i krytyka mockupu: `layout.md`.

## Strony, których jeszcze nie ma

Linki ze strony głównej prowadzą dziś donikąd (404).

- [ ] Wireframe huba, listy kategorii i karty produktu – wg briefu w `layout.md` („Brief stron”).
- [ ] Hub (`/urodziny/`, `/dla-mamy/`, `/hobby/malarz/`, `/do-200-zl/`) – zawężenia jako statyczne linki, powiązane huby.
- [ ] Lista kategorii (`/urodziny/dla-mamy/do-200-zl/`) – szablon `/okazja/osoba/` z suwakiem ceny gotowy (PRE-18); podstrony budżetu na próbę (`/urodziny/dla-mamy/do-100-zl/`) – wstęp, data i autor, pasek afiliacji, 4–8 produktów, FAQ, powiązane listy, okruszki.
- [ ] Karta produktu (`/prezent/slug/`) – przycisk „Zobacz w sklepie” przyklejony na dole na telefonie, podobne w tym budżecie, stan „produkt wycofany”.
- [ ] Przekierowania `/go/slug` z mapowaniem w `links.json`.
- [ ] Strony zbiorcze: `/okazje/`, `/osoby/`, `/hobby/`.
- [ ] „Jak zarabiamy”, „O nas” (prawdziwy autor z bio), „Kontakt”, „Polityka prywatności”.

## Dane i treści

- [ ] Content collection produktów wg modelu z `PRODUCT.md` (bez „Odpuść, jeśli”).
- [ ] Liczba propozycji [N] w „Gotowych listach” liczona przy buildzie, z odmianą „propozycja / propozycje / propozycji”.
- [ ] Ostateczna lista hobby i skład „Gotowych list” – teraz to przykłady (`src/data/katalog.ts`, `src/pages/index.astro`).
- [ ] Zdjęcia produktów z feedów partnerów zamiast zakreskowanych placeholderów.
- [ ] Stan „cena nieaktualna” po 30 dniach od weryfikacji: „Sprawdź aktualną cenę w sklepie”.
- [ ] Stan „brak wyników w budżecie” na liście: najbliższy wyższy próg i sąsiednie listy.
- [ ] Jedna linijka metodologii wyboru produktów przy autorze i dacie.

## Quiz

- [ ] Przeklikać kroki 2 i 3 oraz ekran „Gotowe” – żaden przegląd ich nie widział.
- [ ] Fokus na nagłówek nowego pytania po odpowiedzi (`tabindex="-1"`), żeby czytnik ekranu nie gubił miejsca.
- [ ] Stan quizu w URL (`?okazja=…&osoba=…&budzet=…`) – decyzja z PRODUCT.md, jeszcze niezrobiona.
- [ ] Zachowanie bez JavaScriptu: dziś widać pytanie 1, ale przyciski nic nie robią.

## Spójność systemu wizualnego (z dokumentacji DESIGN.md)

- [x] Hover linków w katalogu (`.dims a:hover span`) to płaski żółty pasek – zamienić na pociągnięcie markera jak `.mark`.
- [ ] Cztery szarości wpisane na sztywno (#c9c9c2, #d9d9d3, #9a9a93, #d6d6cf) – przenieść do tokenów.
- [ ] Kolory w SVG (`Ikony.astro`, data URI w CSS) wpisane hexem – nie podążają za tokenami.
- [ ] Przejrzeć w DESIGN.md opis ogólny i nazwy kolorów – dokumentacja nie dopytywała, wzięła je z kontraktu i kodu.

## Dostępność i SEO

- [x] `aria-label` przycisków sklepu z nazwą produktu i sklepu („Sprawdź {nazwa} w {sklep}”), gdy na liście jest kilka kart.
- [ ] `aria-current` w menu na podstronach.
- [ ] Obraz OG, sitemap, `robots.txt`.
- [ ] Oznaczenie treści tworzonych z AI (PRE-8) – po decyzji prawnej, w stopce albo w „O nas”.

## Porządki

- [ ] Opublikowany artefakt strony głównej (https://claude.ai/artifact/917wK377xF4fCVz2xqgTNz) jest nieaktualny: ma „Odpuść”, maskotkę z dymkiem i stare kolory. Wzorem jest Astro – zaktualizować albo usunąć.
- [x] Wpis z 28.10 w `decyzje.md` podaje ścieżkę `docs/decyzje.md`, a plik leży w katalogu głównym.
- [ ] Commit i PR gałęzi `feature/dago/layout` (projekt Astro, DESIGN.md, `.impeccable/`, dokumenty).
