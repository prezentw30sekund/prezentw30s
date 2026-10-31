# prezentw30s.pl

Afiliacyjna strona „Prezent w 30 sekund”, zbudowana w Astro i wdrażana na Vercel. Pracują nad nią 2 osoby, każda ze swoim Claude'em. Pamięć i historia czatów nie są współdzielone, dlatego wszystko, co ma znać druga osoba, trafia do Lineara (workspace `prezentw30s`, zadania `PRE-xx`) albo do repo.

## Gdzie co jest

- `docs/decyzje.md`: koncepcja, stack, programy partnerskie, zasady SEO i afiliacji, dziennik decyzji. Przeczytaj, zanim zaczniesz coś zmieniać.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/`: produkt i system wizualny („Rada na serwetce”)
- `layout.md`, `layout_to_do.md`: krytyka mockupu i lista brakujących stron
- `src/pages/`, `src/layouts/`, `src/components/`, `src/styles/global.css`: kod strony
- `src/data/katalog.ts`: produkty, okazje, osoby
- `.claude/skills/README.md`: skille i pluginy, których używamy

## Komendy

- `npm run dev`: serwer deweloperski
- `npm run build`: build produkcyjny (to samo robi Vercel)
- `npm run check`: `astro check`

## Gałęzie

- Jedno zadanie w Linear to jedna gałąź i jedna sesja Claude'a.
- Nazwa gałęzi: `feature/<osoba>/<nr-zadania>` małymi literami, np. `feature/dago/pre-24`. Nie używamy nazwy, którą podpowiada Linear.
- Każdą gałąź odgałęziamy od aktualnego `origin/main` i nie ustawiamy `main` jako jej upstream.
- Tytuł PR-a zawiera numer zadania (np. `PRE-24 …`), żeby Linear połączył PR z zadaniem.

## Zasady pracy

- Zanim zaczniesz, przypisz zadanie do siebie i przesuń je do „In Progress”. Nie pracujemy równolegle na tej samej gałęzi ani na tych samych plikach.
- Każda zmiana idzie przez PR z podglądem na Vercelu. Merge robimy dopiero po akceptacji drugiej osoby.
- Decyzję podjętą w czacie zapisujemy jako komentarz w zadaniu w Linear albo jako wpis w dzienniku w `docs/decyzje.md` (przez PR).
- Linki afiliacyjne trzymamy w plikach repo, a klucze i tokeny tylko w zmiennych środowiskowych Vercel. Sekretów nigdy nie wklejamy do czatu ani do repo.
- Każdą zmianę wyglądu lub layoutu robimy przez skill `impeccable`.
- Treści pisane z AI zawsze przegląda człowiek przed merge'em (wytyczne: PRE-12).
