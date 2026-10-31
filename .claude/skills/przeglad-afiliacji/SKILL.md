---
name: przeglad-afiliacji
description: Przegląd PR-a lub zmian na gałęzi pod kątem zasad afiliacji, SEO i treści prezentw30s.pl. Użyj, gdy ktoś prosi o przegląd PR, review zmian w produktach, linkach albo podstronach okazji, albo przed merge'em treści.
---

# Przegląd PR pod kątem afiliacji

Źródło zasad: `docs/decyzje.md` (sekcje „Stack techniczny”, „Programy partnerskie”, „Treści i SEO”). Jeśli zasada tutaj różni się od `docs/decyzje.md`, wygrywa `docs/decyzje.md`. Zgłoś wtedy rozbieżność.

## Kroki

1. Pobierz zmiany: `git fetch` i `git diff origin/main...HEAD`. Jeśli przegląd dotyczy PR-a z GitHuba, użyj `gh pr diff <nr>`.
2. Przejdź przez listę poniżej. Sprawdzaj tylko to, czego dotyczy diff.
3. Zgłoś wynik w podziale na kategorie **Blokuje merge**, **Do poprawy** i **Uwagi**. Przy każdym punkcie podaj `plik:linia` i powód. Jeśli nic nie znalazłeś, napisz to wprost.

## Linki afiliacyjne

- W treściach i komponentach są tylko linki `/go/<slug>`. Bezpośredni link afiliacyjny lub link ze śledzeniem sieci (np. webePartners) poza `links.json` **blokuje merge**.
- Każdy link `/go/` ma `rel="sponsored nofollow"`.
- Każdy nowy slug `/go/` istnieje w `links.json`. Linki bez slugów i nieużywane slugi zgłoś.
- Strony `/go/` są wyłączone z indeksowania (noindex, robots).
- W diffie nie ma sekretów, tokenów ani kluczy API. Należą do zmiennych środowiskowych Vercel. Ich obecność **blokuje merge**.

## Oznaczanie afiliacji

- Każda strona z produktami ma pasek informujący o afiliacji i link do strony „Jak zarabiamy”.

## Produkty

- Produkt ma wszystkie pola modelu: nazwa, sklep, slug `/go/`, zdjęcie, kategoria, okazje [], osoby [], przedział cenowy, opis, „Pasuje, jeśli” oraz datę weryfikacji ceny i dostępności.
- Okazje i osoby używają slugów z `src/data/katalog.ts`. Nowy slug musi tam trafić.
- „Pasuje, jeśli” mówi konkretnie, komu i dlaczego, a nie powtarza nazwy produktu.
- Data weryfikacji ceny jest aktualna. Starszą niż 30 dni zgłoś jako **Do poprawy**.
- Sklep jest na liście programów w `docs/decyzje.md`. Program z rezerwy lub spoza listy zgłoś.
- Alkohol: **blokuje merge** (decyzja: nie wchodzimy bez weryfikacji prawnej).
- Zdjęcia pochodzą tylko z materiałów partnera, z feedu albo z licencją (Unsplash, Pexels). Dużych plików nie dodajemy do repo bez potrzeby. Zdjęcia renderuje `<Image />`.

## Treści i SEO

- Podstrona okazji ma: wstęp, datę aktualizacji i autora, produkty z „Pasuje, jeśli”, tabelę porównawczą, FAQ i linki do powiązanych okazji.
- Keyword stuffing **blokuje merge** (decyzja ostateczna).
- Nowe podstrony to dopracowane kombinacje okazja + osoba, a nie hurtowo generowane strony (ryzyko doorway pages i thin content).
- Treść pisana z AI: człowiek sprawdził fakty, ceny i dostępność oraz dodał własną ocenę (PRE-12). Jeśli nie widać ludzkiej oceny, zgłoś to.
- Zakazane przez webePartners: nazwy marek reklamodawców w płatnych reklamach (brand bidding), wprowadzanie w błąd, nieaktualne oferty.

## Proces

- Tytuł PR-a zawiera `PRE-xx`, a gałąź ma nazwę `feature/<osoba>/<nr-zadania>`.
- Decyzje, które zmieniają zasady, mają wpis w dzienniku `docs/decyzje.md`.
- Zmiany wyglądu przeszły przez skill `impeccable`.
