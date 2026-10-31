# Layout prezentw30s.pl – krytyka i plan prac

Źródło: mockup na kanwie „Prezentw30s mockup” (https://claude.ai/artifact/5PQhGm9YoPfzMYLVVmtYhg)
– artboardy `Main.dc.html` (strona główna z quizem) i `Kategoria30.dc.html` (podstrona „30. urodziny”).
`Seed850471.dc.html` to archiwalna koncepcja – poza zakresem.

Krytyka: `/impeccable critique`, 2026-10-31, metoda dual-agent (przegląd projektowy + detektor).
Ocena ze źródła, bez renderu – pomiary mobilne są szacunkiem z CSS.
Archiwum przebiegu: `.impeccable/critique/2026-10-31T11-05-49Z__claude-ai-artifact-5pqhgm9yopfzmylvvmtyhg.md`

## Decyzje po krytyce

- **Kolejność:** najpierw logika quizu (P0).
- **Ton:** cieplej, bardziej „prezentowo” – nowa typografia i paleta, pierścień 30 s jako wskaźnik postępu.
- **Zakres:** wszystkie 5 problemów priorytetowych.

- **31.10.2026:** strona jest jednocześnie katalogiem przedmiotów z linkami afiliacyjnymi, ułożonym według okazji i osób. Quiz to skrót do katalogu i filtruje te same produkty.
- **31.10.2026:** quiz to tylko dodatek (skrót do kategorii z filtrem budżetu). Katalog nie skupia się na urodzinach: wymiary to okazja, osoba/relacja, hobby i budżet (np. „malarz do 200 zł”, „znajomy z pracy, 500 zł”). Mockup ma objąć: stronę główną, hub, listę kategorii z filtrami, kartę produktu. Najpierw kierunek wizualny, potem strony.
- **31.10.2026:** przebudowa wyglądu odłożona (runda kierunków przerwana bez wyboru); najpierw quiz.

## Postęp

- [x] P0 quiz na kanwie (`Main.dc.html`): filtrowanie katalogu po okazji, osobie i budżecie; stan „bez idealnego trafienia” i „nic w budżecie”; odmiana liczebnika; edycja pojedynczej odpowiedzi; opcje „Inna okazja”, „Dziecko”, „Inna osoba”; link do katalogu okazja › osoba; „Odpuść, jeśli” na kartach; `aria-live` na kroku; usunięte „Najczęściej wybierane w tym tygodniu”.
- [ ] Stan w URL – dopiero w Astro (kanwa nie ma adresów).
- [x] Wireframe strony głównej (31.10.2026, zatwierdzony): https://claude.ai/artifact/4cH7vfun6gUy5AD2ZTrGoJ – nagłówek bez list, pierwszy ekran = quiz + „Wolę przeglądać”, katalog 4 wymiarów (jedyne miejsce list), gotowe listy, „Jak to działa” z przykładową kartą, „Jak zarabiamy”, stopka.
- [ ] Wireframe: hub, lista kategorii, karta produktu.
- [x] Kierunek wizualny (31.10.2026): „Rada na serwetce” – odręczny zin, marker na białym, zakreślacze o stałych rolach (żółty = akcja, turkus = „Pasuje”; róż i „Odpuść” usunięte 31.10), maskotka-kumpel. Kontrakt: `.impeccable/surfaces/src-pages-index-astro.md`.
- [x] Strona główna w nowym stylu – Astro (`src/pages/index.astro`), po przeglądzie końcowym (2 rundy poprawek). System wizualny: `DESIGN.md`.
- [ ] Huby, listy, karty produktu, `/go/`, „Jak zarabiamy” – linki ze strony głównej prowadzą jeszcze donikąd.

## Wynik: 20/36 (56%, Acceptable)

| # | Heurystyka | Ocena | Główny problem |
|---|---|---|---|
| 1 | Widoczność stanu | 2 | Pasek postępu OK, ale zmiana kroku nieogłaszana, wyniki nie reagują na odpowiedzi |
| 2 | Zgodność ze światem | 3 | Naturalny polski; brak „Dziecko” / „Inna osoba”, różne widełki budżetu |
| 3 | Kontrola użytkownika | 2 | Na „Gotowe” tylko „Zacznij od nowa”; brak stanu w URL, refresh kasuje wszystko |
| 4 | Spójność | 2 | CTA sklepu turkusowe vs żółte, różne menu i budżety między stronami |
| 5 | Zapobieganie błędom | 2 | „do 100 zł” → lot balonem; brak obsługi zera wyników |
| 6 | Rozpoznawanie | 3 | Podsumowanie OK; po „Wróć” brak zaznaczenia poprzedniej opcji |
| 7 | Elastyczność | n/a | Jednorazowy przepływ perswazyjny |
| 8 | Estetyka i minimalizm | 2 | Lista okazji 3× na stronie głównej (menu, quiz, kafle) |
| 9 | Naprawa błędów | 1 | Brak stanu „brak wyników” i podpowiedzi zastępczych |
| 10 | Pomoc | 3 | „Jak to działa”, „Jak zarabiamy”, FAQ – odpowiedzi to placeholdery |

## Specyficzność designu

Raczej szablonowy: turkus #0F3D3E + musztarda #E9B44C, Space Grotesk + Inter, pigułkowe menu,
pastelowe kafle, „Jak to działa” z trzema numerkami. Detektor: `overused-font` dla obu fontów na obu stronach
(`cramped-padding` na ramce tabeli to fałszywy alarm – komórki mają 14–16 px paddingu).

Wyróżniki produktu, które warto wzmocnić:
- pierścień „30 s” – dziś statyczna dekoracja,
- para „Pasuje, jeśli / Odpuść, jeśli” – wyróżnik z `decyzje.md`, pełna tylko na podstronie.

## Co działa – zachować

1. „Pasuje / Odpuść, jeśli” na podstronie (kolor #9A3B12, kontrast 6.98:1).
2. Przejrzyste ujawnienie afiliacji: pasek u góry, stopka, „Jak zarabiamy”, `rel="sponsored nofollow"`.
3. Baza a11y: prawdziwe `<button>`, cele 44–52 px, `lang="pl"`, `<details>` w FAQ, tabela przewijana w boksie.
   Sprawdzone pary kolorów przechodzą AA (np. #1B1F3B na #E9B44C – 8.5:1, #D3E3E2 na #0F3D3E – 9:1).

## Problemy priorytetowe

### 1. [P0] Quiz ignoruje odpowiedzi
`Main.dc.html:193`: `const results = done ? all.slice(0, 4) : all.slice(0, 4);` – te same 4 karty przed i po quizie.
- [ ] filtrowanie po okazji / osobie / budżecie wg modelu danych z `decyzje.md`, sortowanie po dopasowaniu
- [ ] stan „brak idealnych trafień, oto najbliższe”
- [ ] odpowiedzi w URL (`?okazja=…&osoba=…&budzet=…`)
- [ ] odmiana „propozycja / propozycje / propozycji”
- [ ] siatka sprzed quizu z innym tytułem albo ukryta do zakończenia quizu
- [ ] opcje „Inna osoba”, „Dziecko” (i ew. „Inna okazja”)
- [ ] edycja pojedynczej odpowiedzi na ekranie „Gotowe”
- Komenda: `/impeccable harden`

### 2. [P1] Brak responsywności, quiz pod linią zgięcia na telefonie
Brak `@media` i `clamp()`. Przy 375 px quiz zaczyna się ok. 800 px w dół; h1 podstrony – 6–7 linii.
- [ ] `clamp()` na nagłówkach (ok. 32–54 px)
- [ ] zwijane menu na mobile
- [ ] na mobile quiz przed tekstem leadu, pierścień inline lub ukryty
- [ ] naprawa `border-left` + `padding-left` kolumny ceny na podstronie przy zawinięciu
- Komenda: `/impeccable adapt`

### 3. [P1] Niespójność stron, podstrona bez wejścia do quizu
- [ ] jeden kolor CTA sklepu na obu stronach (teraz: turkus na głównej, żółty na podstronie)
- [ ] jedno menu (teraz 6 vs 5 pozycji, „Urodziny” prowadzi gdzie indziej, brak `aria-current`)
- [ ] wspólne widełki budżetu (teraz 100/300/700 vs 200/500)
- [ ] Inter 700 ładowany też na podstronie (teraz sztuczne pogrubienie)
- [ ] jednolite wyrównanie logo
- [ ] blok „Zawęź w 30 s” (quiz z `?okazja=urodziny`) i sekcja powiązanych okazji na podstronie
- Komenda: `/impeccable polish`, potem `/impeccable document`

### 4. [P1] Karty na głównej bez „Odpuść, jeśli” i daty ceny
„Jak to działa” obiecuje „komu pasuje, a komu nie”. Cena bez daty to ryzyko zaufania i regulaminu sieci.
- [ ] „Odpuść, jeśli” na kartach wyników (może być zwijane)
- [ ] „cena sprawdzona: [DATA]”
- [ ] H1 podstrony zgodny z liczbą kart („12 pomysłów” vs 4 karty)
- [ ] usunąć bezpodstawne „Najczęściej wybierane w tym tygodniu”
- [ ] ukryć slug `/go/…` przed użytkownikiem
- [ ] jedna linijka metodologii rankingu przy autorze i dacie
- Komenda: `/impeccable clarify`

### 5. [P2] Dostępność quizu
- [ ] fokus na h2 nowego kroku (`tabindex="-1"`)
- [ ] `aria-live="polite"` na etykiecie „Krok”
- [ ] `aria-pressed` + widoczny stan zaznaczenia opcji
- [ ] ramki opcji ≥ 3:1 (teraz #C9CEDB, 1.57:1 → ok. #8A90A6)
- [ ] `aria-label` „Sprawdź {nazwa} w {sklep}” zamiast 4× „Sprawdź w sklepie”
- [ ] tabela: `scope` w `th`, `<caption>`; produkty jako h3 pod h2 sekcji
- [ ] widoczny hover w menu (#0A2A2B vs #0F3D3E jest niewidoczny)
- Komenda: `/impeccable audit`

## Persony – czerwone flagi

- **Jordan (pierwszy raz):** po quizie widzi te same karty → „quiz nie działa”; brak „Inna osoba”; filtry podstrony bez wyjaśnienia, jak się łączą.
- **Riley (krawędzie):** „12 pomysłów” vs 4 karty; „najczęściej wybierane” bez danych; tabela pełna `[CENA]`; refresh kasuje stan.
- **Casey (telefon):** musi przewinąć, żeby zacząć quiz; „Pokaż propozycje” poza strefą kciuka; 6 pigułek filtrów w 2–3 rzędach.
- **Sam (czytnik ekranu):** zmiany kroków nieogłaszane; brak stanu wybranej opcji; zduplikowane teksty linków.

## Drobne

- Pierścień „30 s” i nadtytuł „3 pytania · każda okazja” dublują h1.
- „Kalendarz okazji” to martwy link – dobry pomysł na ruch sezonowy (Dzień Matki, Mikołajki).
- Filtry podstrony mieszają trzy wymiary (osoba, budżet, typ) w jednym rzędzie, bez `aria-pressed`.
- Placeholdery `[IMIĘ]`, `[ROK]` – potrzebny prawdziwy autor z bio (E-E-A-T).
- Facetaria.pl jest w danych, choć w `decyzje.md` to program rezerwowy.

## Kierunek wizualny (decyzja: cieplej, bardziej prezentowo)

Do ustalenia w `/impeccable init` (PRODUCT.md) i potem w nowym kierunku wizualnym:
- nowa para fontów zamiast Space Grotesk + Inter,
- cieplejsza paleta z emocją okazji,
- pierścień 30 s jako wskaźnik postępu quizu, wypełniany z każdą odpowiedzią,
- rozważyć werdykt „Pasuje / Odpuść” jako nagłówek karty, a nazwę produktu jako podtytuł.

Komendy: `/impeccable typeset`, `/impeccable colorize`.

## Kolejność prac

1. `/impeccable harden` – logika quizu (P0)
2. `/impeccable init` → `/impeccable typeset` + `/impeccable colorize` – cieplejszy kierunek wizualny
3. `/impeccable adapt` – mobile
4. `/impeccable clarify` – karty, treści, zaufanie
5. `/impeccable audit` – dostępność quizu
6. `/impeccable polish` + `/impeccable document` – spójność stron i DESIGN.md
7. `/impeccable critique` – ponowna ocena

## Pytania otwarte

1. Jeśli katalog jest za mały do filtrowania, czy MVP to „3 pytania → pasująca podstrona okazji”?
2. Pierścień 30 s jako progress quizu – tak/nie?
3. Werdykt „Pasuje / Odpuść” jako nagłówek karty?

## Brief stron (shape, 31.10.2026 – zatwierdzony)

Zakres: strona główna, hub, lista kategorii, karta produktu. Tylko struktura i zachowanie – wygląd odłożony.

- **Tryby:** główna – Persuade; hub – Read; lista – Operate; karta – Read → akcja. Sukces: przejście na `/go/slug` w ≤ 3 kliknięciach od wejścia.
- **Teza:** katalog z czterema wejściami (okazja, osoba, hobby, budżet); każda strona prowadzi do węższej listy; quiz 30 s to skrót do tej samej listy. Lista i karta muszą działać jako strony wejścia z Google.
- **Strona główna:** pierwszy ekran = hasło + dwa równorzędne wejścia (quiz / przeglądanie po wymiarze); każdy wymiar pokazany raz; niżej kilka gotowych list, „Jak to działa”, „Jak zarabiamy”.
- **Hub** (`/dla-mamy/`, `/malarz/`, `/urodziny/`): rozdroże – krótki wstęp, zawężenia (progi budżetu, przecięcia z drugim wymiarem) jako duże cele dotyku prowadzące do statycznych list, opcjonalnie 3 wyróżnione produkty, powiązane huby.
- **Lista** (`/dla-mamy/do-200-zl/`): wstęp, data i autor, pasek afiliacji, 4–8 produktów (maks. 12), tabela porównawcza, FAQ, powiązane listy. Kafelek: zdjęcie, nazwa, sklep, przedział ceny z datą weryfikacji, „Pasuje, jeśli” (1 zdanie), „Szczegóły” → karta, „Do sklepu” → `/go/`.
- **Karta** (`/prezent/slug/`): osobna, indeksowana podstrona – zdjęcie, nazwa, sklep, cena z datą, jedna akcja „Zobacz w sklepie” (przyklejona na dole na telefonie), pełne „Pasuje, jeśli”, opis, linki do okazji/osób, podobne w tym budżecie.
- **Stany:** brak wyników w budżecie → najbliższy wyższy próg + sąsiednie listy; stara weryfikacja ceny → „Sprawdź aktualną cenę w sklepie”; produkt wycofany → karta zostaje, bez przycisku sklepu, z podobnymi; brak zdjęcia → neutralny zastępnik; długie nazwy → 2 linie na kafelku.
- **Układ:** mobile-first (390 px), cele ≥ 44 px, jeden kolor akcji sklepu, jedno menu i jeden zestaw progów budżetu w całym serwisie, okruszki na hubie/liście/karcie.

### Decyzje z briefu (31.10.2026, wpisane też do `decyzje.md`)

1. Filtry listy: statyczne linki do podstron, bez drugiej wyspy.
2. Progi budżetu: do 50 / 100 / 200 / 500 zł, powyżej 500 zł.
3. URL: `/urodziny/dla-mamy/` (okazja → osoba), hobby `/hobby/malarz/`, karta `/prezent/slug/`.
4. Cena nieaktualna po 30 dniach od weryfikacji.
5. Otwarte: oznaczanie treści z AI (PRE-8).
