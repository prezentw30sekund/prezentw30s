# Analiza słów kluczowych: pierwsze podstrony okazji (PRE-11)

Stan na 31.10.2026. Cel: wybrać, od których podstron zaczynamy (PRE-22).

## Metoda i jej granice

- **Źródło fraz:** podpowiedzi Google (Suggest, `hl=pl`, `gl=pl`) dla rdzeni „prezent na [okazja]”, „… dla”, „… do” i „prezent dla [osoba]”. Około 70 zapytań, 31.10.2026.
- **To nie są wolumeny.** Suggest pokazuje, *co* ludzie wpisują, a kolejność w podpowiedziach jest tylko przybliżeniem popularności. Kolumna „Sygnał” podaje pozycję frazy w podpowiedziach (S1 = pierwsza). Prawdziwe wolumeny dopisujemy później z Google Keyword Planner.
- **Konkurencja** to ocena jakościowa: im ogólniejsza fraza, tym silniejsi gracze w wynikach (Allegro, Ceneo, duże sklepy z prezentami, portale). Nowa domena nie ma szans na frazy ogólne w pierwszym sezonie, ale może walczyć o frazy z osobą i budżetem.
- **Dopasowanie do partnerów** (decyzje.md: przeżycia, kosmetyki, perfumy, biżuteria, zegarki) obniża priorytet tam, gdzie nie mamy czego polecić (zabawki dla dzieci, wyposażenie domu).
- Adresy wyłącznie z wymiarów w `src/data/katalog.ts` (`sciezkaListy`: okazja → osoba → budżet). Po tej analizie lista osób i okazji została zmieniona, szczegóły w dzienniku w `decyzje.md`.

**Priorytet:** P1 = pierwsza piątka i najbliższa kolejka, P2 = następna fala, P3 = później albo słabe dopasowanie.

## Sezonowość (od dziś)

| Okazja | Data | Ile zostało | Kiedy publikować |
|---|---|---|---|
| Mikołajki | 6.12 | ~5 tygodni | od razu; w tym roku ruch będzie mały, liczy się adres na kolejne lata |
| Święta | 24.12 | ~8 tygodni | od razu; Google potrzebuje tygodni na indeksację |
| Dzień Babci i Dziadka | 21–22.01 | ~12 tygodni | dodajemy do katalogu w grudniu |
| Walentynki | 14.02 | ~15 tygodni | do początku stycznia |
| Dzień Matki | 26.05 | ~7 miesięcy | do końca kwietnia |
| Dzień Ojca | 23.06 | ~8 miesięcy | do końca maja |
| Urodziny, imieniny, rocznica, ślub, parapetówka | cały rok | — | w dowolnej chwili, ruch równy |

Podstrony sezonowe zostają pod tym samym adresem rok do roku, więc nawet jeśli w tym sezonie przyniosą mało ruchu, praca nie przepada.

## Tabela kombinacji

| # | URL | Główna fraza | Warianty z podpowiedzi | Sygnał | Konkurencja | Partnerzy | Priorytet |
|---|---|---|---|---|---|---|---|
| 1 | `/mikolajki/do-50-zl/` | prezent na mikołajki do 50 zł | do 50 zł dla kobiety, do 30 zł, do 20 zł | S2 | średnia | dobre (kosmetyki, perfumy) | **P1** |
| 2 | `/swieta/dla-mamy/` | prezent na święta dla mamy | — | S1 | wysoka | dobre | **P1** |
| 3 | `/swieta/do-100-zl/` | prezent na święta do 100 zł | do 150 zł | S1 | średnia | dobre | **P1** |
| 4 | `/rocznica/dla-niego/` | prezent na rocznicę dla chłopaka | dla męża, dla niego, rocznica ślubu dla męża | S1–S3 | średnia | bardzo dobre (przeżycia, zegarki) | **P1** |
| 5 | `/urodziny/dla-mamy/` | prezent na urodziny dla mamy | prezent dla mamy na urodziny (S2) | S4 | wysoka | dobre | **P1** |
| 6 | `/mikolajki/dla-niego/` | prezent na mikołajki dla chłopaka | — | S2 | średnia | dobre | **P1** |
| 7 | `/swieta/dla-niej/` | prezent na święta dla kobiety | dla dziewczyny | S2 | wysoka | bardzo dobre | **P1** |
| 8 | `/swieta/dla-niego/` | prezent na święta dla mężczyzny | dla chłopaka | S3, S6 | wysoka | dobre | **P1** |
| 9 | `/rocznica/dla-niej/` | prezent na rocznicę dla dziewczyny | dla niej, dla żony, rocznica ślubu dla żony | S4–S5 | średnia | bardzo dobre (biżuteria) | **P1** |
| 10 | `/walentynki/dla-niej/` | prezent na walentynki dla niej | dla żony, dla kobiety | S1 | wysoka | bardzo dobre | **P1** (do stycznia) |
| 11 | `/walentynki/dla-niego/` | prezent na walentynki dla niego | dla męża, dla chłopaka, dla narzeczonego | S2–S4 | wysoka | dobre | **P1** (do stycznia) |
| 12 | `/urodziny/dla-taty/` | prezent na urodziny dla taty | prezent dla taty na urodziny (S2) | S5 | wysoka | dobre (zegarki, perfumy) | **P1** |
| 13 | `/urodziny/dla-niej/` | prezent na urodziny dla kobiety | dla dziewczyny, prezent dla żony na urodziny (S1) | S1, S8 | wysoka | bardzo dobre | **P1** |
| 14 | `/urodziny/dla-niego/` | prezent na urodziny dla faceta | dla mężczyzny, dla męża, dla chłopaka | S2–S3, S7, S9 | wysoka | dobre | **P1** |
| 15 | `/mikolajki/dla-niej/` | prezent na mikołajki dla dziewczyny | — | S5 | średnia | dobre | P2 |
| 16 | `/mikolajki/dla-znajomego-z-pracy/` | prezent na mikołajki dla koleżanki z pracy | — | S10 | niska | dobre | P2 |
| 17 | `/swieta/dla-taty/` | prezent na święta dla taty | — | S9 | wysoka | dobre | P2 |
| 18 | `/swieta/do-50-zl/` | prezent na święta do 50 zł | do 30 zł, do 40 zł | S2 | średnia | średnie (kosmetyki) | P2 |
| 19 | `/swieta/` | prezent na święta | prezent na Boże Narodzenie | root | bardzo wysoka | dobre | P2 (hub) |
| 20 | `/urodziny/dla-przyjaciolki/` | prezent na urodziny dla przyjaciółki | prezent dla przyjaciółki na urodziny (S1) | S6 | średnia | dobre (kosmetyki) | P2 |
| 21 | `/urodziny/do-100-zl/` | prezent na urodziny do 100 zł | — | S2 | średnia | dobre | P2 |
| 22 | `/urodziny/` | prezent na urodziny | — | root | bardzo wysoka | dobre | P2 (hub) |
| 23 | `/dzien-matki/` | prezent na dzień matki | od dzieci, dla teściowej | root | wysoka | bardzo dobre | P2 (sezon: kwiecień) |
| 24 | `/dzien-ojca/` | prezent na dzień ojca | od córki, od dorosłych dzieci, praktyczny | root | wysoka | dobre | P2 (sezon: maj) |
| 25 | `/imieniny/dla-mamy/` | prezent na imieniny dla mamy | — | S2 | niska | dobre | P2 |
| 26 | `/imieniny/dla-niej/` | prezent na imieniny dla kobiety | dla żony | S1, S9 | niska | dobre | P2 |
| 27 | `/imieniny/dla-niego/` | prezent na imieniny dla mężczyzny | dla męża | S3, S5 | niska | dobre | P2 |
| 28 | `/imieniny/dla-taty/` | prezent na imieniny dla taty | — | S4 | niska | dobre | P2 |
| 29 | `/slub/` | prezent na ślub dla pary młodej | ślub cywilny, pamiątka | S1 | wysoka | dobre (przeżycia dla dwojga) | P2 |
| 30 | `/slub/dla-znajomego-z-pracy/` | prezent na ślub dla koleżanki z pracy | dla kolegi z pracy | S2, S6 | niska | dobre | P2 |
| 31 | `/rocznica/` | prezent na rocznicę ślubu | dla rodziców, dla znajomych | root | wysoka | dobre | P2 (hub) |
| 32 | `/walentynki/do-100-zl/` | prezent na walentynki do 100 zł | do 50 zł | S1 | średnia | dobre | P2 |
| 33 | `/imieniny/do-50-zl/` | prezent na imieniny do 50 zł | do 100 zł | S1–S2 | niska | średnie | P3 |
| 34 | `/slub/do-500-zl/` | prezent na ślub do 500 zł | do 200 zł, do 300 zł | S1–S2 | niska | dobre (przeżycia) | P3 |
| 35 | `/urodziny/do-200-zl/` | prezent na urodziny do 200 zł | do 300 zł | S3 | średnia | dobre | P3 |
| 36 | `/slub/dla-przyjaciolki/` | prezent na ślub dla przyjaciółki | dla przyjaciół | S3, S5 | niska | dobre | P3 |
| 37 | `/dzien-matki/do-100-zl/` | prezent na dzień matki do 100 zł | do 50 zł | S2–S3 | niska | dobre | P3 |
| 38 | `/mikolajki/dla-dziecka/` | prezent na mikołajki dla dzieci | 5, 6, 8 lat, przedszkolak | S1 | bardzo wysoka | słabe | P3 |
| 39 | `/swieta/dla-dziecka/` | prezent na święta dla dzieci | dla dziewczynki, dla 10/11-latki | S7 | bardzo wysoka | słabe | P3 |
| 40 | `/parapetowka/` | prezent na parapetówkę | dla pary, praktyczny, do domu | root | średnia | słabe | P3 |

Poza tabelą, bo sygnał słaby: `/urodziny/dla-dziecka/` (frazy idą po wieku, nie po okazji), `/urodziny/dla-znajomego-z-pracy/` (w podpowiedziach tylko „dla szefa”), `/…/dla-przyjaciela/` (w podpowiedziach prawie nie występuje, zostaje w katalogu dla kompletności).

## Propozycja pierwszej piątki do PRE-22

1. `/mikolajki/do-50-zl/`: najbliższy termin, budżet pasuje do prezentów w pracy i do kosmetyków.
2. `/swieta/dla-mamy/`: sezon zaraz, mama to najczęstsza osoba w podpowiedziach.
3. `/swieta/do-100-zl/`: fraza z budżetem, słabsza konkurencja, pasuje do wszystkich partnerów.
4. `/rocznica/dla-niego/`: ruch przez cały rok, najlepsze dopasowanie do przeżyć i zegarków.
5. `/urodziny/dla-mamy/`: największy ruch przez cały rok.

Następna fala (grudzień): walentynki dla niej i dla niego, `/swieta/dla-niej/`, `/swieta/dla-niego/` i Dzień Babci i Dziadka.

## Luki: czego katalog jeszcze nie obejmuje

**Osoby:** babcia i dziadek (wchodzą razem z Dniem Babci i Dziadka w grudniu), siostra, brat, teściowa, nauczycielka.

**Okazje:**

- **Dzień Babci i Dziadka (21–22.01)**: dodajemy w grudniu.
- **Dzień Kobiet (8.03), Dzień Chłopaka (30.09), Komunia (maj).**
- **Okrągłe urodziny (18, 30, 40, 50, 60, 70)**: bardzo dużo długich fraz („prezent dla mamy na 60 urodziny”, „na 40 urodziny dla kobiety”). Pasowałyby jako osobny wymiar albo jako okazje `/40-urodziny/`.

**Pomijamy:** frazy z nazwami sklepów (allegro, rossmann, douglas), „do przedszkola/szkoły” (paczki dla dzieci) i „zrobić samemu” (DIY), bo nie mamy dla nich oferty.
