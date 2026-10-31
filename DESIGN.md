---
name: prezentw30s.pl
description: Prezent w 30 sekund – odręczna, szczera rada kumpla narysowana na serwetce.
colors:
  paper: "#ffffff"
  dot: "#e9e9e4"
  ink: "#151515"
  ink-2: "#4a4a46"
  rule: "#bdbdb6"
  yellow: "#ffe14d"
  yellow-soft: "#fffbe0"
  teal: "#2dd4bf"
typography:
  display:
    fontFamily: "'Shantell Sans Variable', system-ui, sans-serif"
    fontSize: "clamp(46px, 11vw, 84px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.01em"
    fontVariation: "'INFM' 70, 'BNCE' 35"
  headline:
    fontFamily: "'Shantell Sans Variable', system-ui, sans-serif"
    fontSize: "clamp(32px, 5.5vw, 46px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
    fontVariation: "'INFM' 70, 'BNCE' 35"
  title:
    fontFamily: "'Shantell Sans Variable', system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 700
    lineHeight: 1.08
    fontVariation: "'INFM' 70, 'BNCE' 35"
  hand-label:
    fontFamily: "'Shantell Sans Variable', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
  body:
    fontFamily: "'Figtree', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "'Figtree', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  wob: "18px 6px 22px 8px / 8px 20px 6px 18px"
  wob2: "8px 22px 7px 20px / 20px 8px 22px 6px"
spacing:
  gutter: "16px"
  chip-gap: "10px"
  grid-gap: "18px"
  block-gap: "28px"
  section: "44px"
components:
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.hand-label}"
    rounded: "{rounded.wob2}"
    padding: "0 22px"
    height: "50px"
  button-go:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    typography: "{typography.hand-label}"
    rounded: "{rounded.wob2}"
    padding: "0 22px"
    height: "50px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.wob2}"
    padding: "0 16px"
    height: "46px"
  chip-pressed:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.wob}"
    padding: "16px"
  list-tile:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.wob}"
    padding: "12px"
  list-tile-hover:
    backgroundColor: "{colors.yellow-soft}"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.hand-label}"
    rounded: "{rounded.wob2}"
    padding: "0 12px"
    height: "44px"
  nav-link-hover:
    backgroundColor: "{colors.yellow}"
---

# Design System: prezentw30s.pl

## Overview

**Creative North Star: "Rada na serwetce"**

Kumpel rysuje Ci odpowiedź na serwetce: biała kartka w delikatną kropkę, czarny marker jako jedyny tusz i trzy zakreślacze, z których każdy ma jedną, stałą robotę. Wszystko, co ma krawędź, jest narysowane ręką: ramki są krzywe (asymetryczny `border-radius`), linie sekcji falują, strzałki są pojedynczą kreską SVG. Strona ma wyglądać jak szczera notatka, nie jak sklepowa witryna.

Gęstość jest umiarkowana i mobilna: duże cele dotyku (min. 44 px, przyciski 46–50 px), jedna kolumna na telefonie, dwie strefy na desktopie. Odręczny krój niesie głos (nagłówki, etykiety, przyciski, dopiski maskotki), a spokojny grotesk niesie treść, opcje i ceny. Ruch jest oszczędny: zakreślacz dociąga się pod wybraną odpowiedzią, kółko markerem wokół „30 s” dorysowuje się z postępem quizu.

Świat odrzuca biały e-commerce z koralowym akcentem i ikonkami prezentów (potwierdzone w kontrakcie kierunku).

**Key Characteristics:**
- Białe tło-serwetka z siatką kropek co 22 px, jeden jasny motyw.
- Czarny marker (2–2.5 px) na każdej krawędzi; brak cieni i gradientów głębi.
- Dwa zakreślacze o stałych rolach: żółty = akcja, turkus = „Pasuje, jeśli”.
- Krzywe ramki z dwóch asymetrycznych promieni (`--wob`, `--wob2`).
- Rysowane SVG: linie sekcji, podkreślenia nagłówków, strzałki, ikony, maskotka-kumpel.

## Colors

Monochromatyczny tusz na białej serwetce plus dwa zakreślacze, które znaczą funkcję, nie dekorację.

### Primary
- **Zakreślacz żółty** (`--yellow`): kolor akcji. Wypełnia przycisk prowadzący dalej („Do sklepu”, „Pokaż propozycje”), zakreśla wybraną odpowiedź w quizie, kluczowe słowo H1 („30 sekund”), hover linków nawigacji, zaznaczenie tekstu i akcent maskotki oraz ikon.
- **Bladożółty** (`--yellow-soft`): hover kafelka gotowej listy i tor paska przewijania. Nigdy jako tło sekcji.

### Secondary
- **Zakreślacz turkusowy** (`--teal`): wyłącznie pod etykietą „Pasuje, jeśli” w karcie produktu.

### Neutral
- **Biel serwetki** (`--paper`): tło strony, kart, przycisków i serwetki quizu. Biała, nie kremowa.
- **Kropka** (`--dot`): siatka kropek tła strony (1 px, co 22 px).
- **Czarny marker** (`--ink`): tekst, wszystkie ramki, linie, strzałki, ikony, obrys focusu.
- **Szary ołówek** (`--ink-2`): tekst drugorzędny (lead, meta karty, licznik pytań, „Wróć”, stopka).
- **Linia przerywana** (`--rule`): przerywane separatory w listach katalogu.

### Named Rules
**The Two Highlighters Rule.** Każdy zakreślacz ma jedną robotę: żółty = akcja, turkus = „Pasuje, jeśli”. Turkus nie pojawia się nigdzie poza werdyktem produktu. Strona nie ma etykiety „Odpuść, jeśli” ani koloru dla niej.

**The One Ink Rule.** Jedynym kolorem linii jest `--ink`. Krawędzie, strzałki, ikony i podkreślenia nie dostają koloru zakreślacza jako obrysu.

## Typography

**Display Font:** Shantell Sans Variable (z `system-ui, sans-serif`)
**Body Font:** Figtree 400/600/700, latin-ext (z `system-ui, -apple-system, 'Segoe UI', sans-serif`)

**Character:** Shantell to marker kumpla z pełnymi polskimi znakami; osie `INFM` (nieformalność) i `BNCE` (podskok liter) robią z niego pismo ręczne, a nie krój komiksowy. Figtree jest spokojny i czytelny w cenach: zera bez kreski, więc „50 zł” czyta się jak cena.

### Hierarchy
- **Display** (800, `clamp(46px, 11vw, 84px)`, 1.08): tylko H1 strony.
- **Headline** (700, `clamp(32px, 5.5vw, 46px)`, 1.08): H2 sekcji, zawsze z rysowanym podkreśleniem.
- **Title** (700, 24–30px): H3 kart i kolumn katalogu (24px), pytanie quizu (30px).
- **Hand label** (700, 16–21px, Shantell): przyciski, nawigacja, nazwy gotowych list, kroki „Jak to działa”, etykiety werdyktu, dopiski maskotki, logo (800).
- **Body** (400, 17px, 1.55, Figtree): tekst ciągły, opcje quizu (500), lead sekcji do 60ch.
- **Body small** (400, 15px, Figtree): meta karty (sklep, cena, data), ujawnienie afiliacji, podpisy kafelków.

### Named Rules
**The Voice vs. Facts Rule.** Shantell mówi (nagłówki, przyciski, dopiski), Figtree informuje (opisy, opcje, ceny, daty). Cena nigdy nie jest składana odręcznym krojem.

**The Tabular Price Rule.** Liczby w meta karty i liczniku quizu używają `font-variant-numeric: tabular-nums`.

## Layout

Kontener `.wrap` do 1120 px, wyśrodkowany; boczny margines strony co najmniej 16 px (z `safe-area-inset`). Sekcje mają rytm 44 px w pionie i zaczynają się falującą, rysowaną linią przez całą szerokość (stopka używa tej samej linii). Nagłówek sekcji, lead (`--ink-2`, maks. 60ch), potem treść 28 px niżej.

Siatki są proste i oparte na `minmax(0, 1fr)`: katalog 1 → 2 (620 px) → 4 kolumny (1040 px); gotowe listy 1 → 2 → 3; hero i „Jak to działa” przechodzą w dwie kolumny od 900 px (hero 5:6, tekst po lewej, serwetka quizu po prawej). Nawigacja zwija się do „Menu” poniżej 720 px. Odstępy: 10 px między chipami, 14–18 px między kafelkami, 28–48 px między blokami.

## Elevation & Depth

System jest płaski. Nie ma cieni ani warstw tonalnych; głębię daje sam rysunek: podwójny szkicowy kontur przycisku, lekki obrót kartek (serwetka quizu −0.6°, karta produktu 0.5°, dopisek maskotki −3°) i wewnętrzna przerywana ramka serwetki.

### Named Rules
**The Drawn Not Lifted Rule.** Głębia to kreska, nie cień. Drugi kontur przycisku to obrys 2 px przesunięty o 4–5 px, nigdy wypełniony blok ani `box-shadow`.

## Shapes

Każda ramka jest krzywa. Dwa asymetryczne promienie: `--wob` (kontenery `.sk`: serwetka, karty, menu, kafelki) i `--wob2` (przyciski, chipy, zdjęcia, linki nawigacji); sąsiednie kafelki naprzemiennie biorą drugi wariant, żeby nie wyglądały na powielone. Obrys markera to 2.5 px dla kontenerów i przycisków, 2 px dla chipów i zdjęć. Numery kroków siedzą w nierównym kółku (`50% 46% 52% 44% / 48% 52% 44% 50%`).

Linie i znaki to SVG z zaokrąglonymi końcami (`stroke-linecap: round`): falująca linia sekcji, podkreślenie nagłówka i `linkhand`, strzałki jedną kreską, ikony wymiarów (kalendarz, osoba, pędzel, monety) z żółtym wypełnieniem, maskotka-kumpel. Zakreślenie `.mark` to narysowana plama SVG z dwiema jaśniejszymi smugami, nie prostokąt.

## Components

### Buttons
Marker na serwetce: pewny, ręcznie obrysowany.
- **Shape:** krzywa ramka `--wob2`, obrys 2.5 px `--ink`, drugi szkicowy kontur 2 px (`--wob`) przesunięty w prawo-dół.
- **Domyślny:** biel serwetki, Shantell 700 18px, min. wysokość 50 px.
- **Akcja (`.btn.go`):** żółte wypełnienie, rysowana strzałka `#i-go` 22 px po tekście.
- **Hover / Focus:** przesunięcie o 1 px w stronę drugiego konturu (przycisk „wciska się” w rysunek); focus to przerywany obrys 3 px `--ink` z odstępem 3 px (globalnie).
- **Link odręczny (`.linkhand`):** Shantell 700 18px bez ramki, z falującą kreską SVG pod spodem; drugorzędna akcja obok przycisku.

### Chips
- **Style:** przezroczyste, obrys 2 px `--ink`, `--wob2`, Figtree 500 17px, min. 46 px.
- **State:** hover zaczyna pociągnięcie zakreślacza (18%); `aria-pressed="true"` dociąga żółty pas na całą szerokość w 0.35 s (`--ease`) i pogrubia tekst do 700.

### Cards / Containers
- **Corner Style:** `--wob`.
- **Background:** `--paper`; kafelek listy na hover `--yellow-soft`.
- **Shadow Strategy:** brak, patrz Elevation & Depth.
- **Border:** 2.5px `--ink`.
- **Internal Padding:** 16 px (karta produktu), 12 px (kafelek listy), 20/18 px (serwetka quizu).

### Karta produktu (sygnatura)
Zdjęcie 170 px w krzywej ramce, H3 24px, meta (sklep, cena · sprawdzone [data]) w Figtree 15px, potem werdykt: etykieta „Pasuje, jeśli” na turkusowym zakreśleniu nad jednym zdaniem. Na dole żółty przycisk „Do sklepu” (`rel="sponsored nofollow"`) i link odręczny „Szczegóły”. Ten sam komponent na stronie głównej i na listach.

### Serwetka quizu (sygnatura)
Kontener `.sk` obrócony o −0.6° z wewnętrzną przerywaną ramką. W nagłówku licznik „Pytanie 1 z 3” i pierścień „30 s”: przerywana szara prowadnica, po której czarna kreska dorysowuje się o ⅓ po każdej odpowiedzi (0.6 s, `--ease`). Pod pytaniem chipy; po pierwszej odpowiedzi stopka z udzielonymi odpowiedziami (podkreślone przerywaną kreską, „zmień”) i „Wróć”.

### Navigation
Logo to maskotka 46 px + „prezentw30s.pl” (Shantell 800 21px) i hasło „Prezent w 30 sekund” (13px, `--ink-2`). Linki Shantell 700 17px, 44 px wysokości, na hover żółte tło w krzywej ramce. Poniżej 720 px: przycisk „Menu” w ramce `--wob2` otwierający natywne `<details>` z listą w kontenerze `.sk`.

### Maskotka-kumpel
Jedna twarz (`#face`) z żółtą aureolą: w logo, przy hero z dopiskiem markerem i rysowaną strzałką do serwetki, przy przykładowej karcie produktu. Mówi w pierwszej osobie, Shantell 700 18–20px.

## Do's and Don'ts

### Do:
- **Do** rysować każdą krawędź obrysem `--ink` 2–2.5 px i promieniem `--wob` lub `--wob2`.
- **Do** zaczynać każdą sekcję falującą linią SVG i podkreślać H2 rysowaną kreską.
- **Do** używać żółtego wyłącznie do akcji i zaznaczenia; turkus wyłącznie w werdykcie produktu.
- **Do** zakreślać słowa narysowaną plamą SVG (`.mark`), nie prostokątem.
- **Do** rysować ikony i strzałki jedną kreską SVG z zaokrąglonymi końcami, z żółtym wypełnieniem jako jedynym kolorem.
- **Do** trzymać cele dotyku na min. 44 px i focus jako przerywany obrys 3 px.

### Don't:
- **Don't** używać kremowego ani przyciemnionego tła; serwetka jest biała (`--paper`).
- **Don't** dodawać `box-shadow`, gradientów głębi ani wypełnionego offsetowego bloku pod przyciskiem.
- **Don't** używać koralowego akcentu ani ikonek prezentów (kokardy, paczki) – to świat, który ta strona odrzuca.
- **Don't** składać cen i opisów odręcznym krojem ani krojem ze skreślonym zerem.
- **Don't** używać turkusu jako akcentu poza „Pasuje, jeśli”; nie dodawać etykiety „Odpuść, jeśli”.
