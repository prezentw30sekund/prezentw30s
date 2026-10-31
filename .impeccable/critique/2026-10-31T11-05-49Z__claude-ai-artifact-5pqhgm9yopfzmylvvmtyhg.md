---
target: Prezentw30s mockup layout
total_score: 20
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 3
target_identity: "url:https://claude.ai/artifact/5PQhGm9YoPfzMYLVVmtYhg"
timestamp: 2026-10-31T11-05-49Z
slug: claude-ai-artifact-5pqhgm9yopfzmylvvmtyhg
---
# Krytyka: mockup prezentw30s.pl (Main.dc.html + Kategoria30.dc.html)
Metoda: dual-agent (A design review, B detector). Źródło bez renderu (brak support.js).

Wynik: 20/36 (56%, Acceptable). n/a: H7.
H1 2 | H2 3 | H3 2 | H4 2 | H5 2 | H6 3 | H7 n/a | H8 2 | H9 1 | H10 3

Specyficzność: raczej szablonowa (teal+musztarda, Space Grotesk/Inter, pigułki, pastelowe kafle). Detector: overused-font x2 na stronę; cramped-padding na wrapperze tabeli = false positive. Wyróżniki: pierścień 30 s (statyczny), "Pasuje/Odpuść, jeśli" (pełne tylko na podstronie).

## Priority issues
1. [P0] Quiz ignoruje odpowiedzi – Main.dc.html:193 results identyczne w obu gałęziach. Fix: filtr po okazji/osobie/cenie, stan "brak trafień", odmiana liczebnika, parametry URL. /impeccable harden
2. [P1] Brak responsywności (0 @media/clamp), quiz ~800px w dół na 375px, h1 podstrony 6-7 linii. /impeccable adapt
3. [P1] Niespójność stron: CTA teal vs żółty, nav 6 vs 5, budżety 100/300/700 vs 200/500, brak Inter 700 na podstronie, brak wejścia do quizu i powiązanych okazji. /impeccable polish, /impeccable document
4. [P1] Karty na głównej bez "Odpuść, jeśli" i daty ceny. /impeccable clarify
5. [P2] A11y quizu: brak focus mgmt/aria-live/aria-pressed, ramki opcji 1.57:1, zduplikowane "Sprawdź w sklepie". /impeccable audit

## Persony
Jordan: identyczne karty po quizie, brak "Inna osoba", slug /go/ widoczny. Riley: "12 pomysłów" vs 4 karty, "najczęściej wybierane" bez danych, tabela [CENA]. Casey: quiz pod foldem, pusta kreska border-left na wąskim. Sam: brak ogłoszeń kroków, h2 produktów = h2 sekcji, tabela bez scope/caption.

## Drobne
Pierścień i eyebrow dublują h1; Kalendarz okazji martwy link; ranking #1 bez metodologii; [IMIĘ]/[ROK]; Facetaria w danych mimo statusu rezerwy.

## Pytania
MVP quiz -> podstrona okazji?; pierścień 30 s jako progress?; werdykt Pasuje/Odpuść jako nagłówek karty?
