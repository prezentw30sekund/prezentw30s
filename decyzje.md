# prezentw30s.pl – ustalenia i decyzje

Jedno źródło prawdy dla obu wspólników i dla Claude'a. Pamięć i historia rozmów w Claude są osobne dla każdego z nas, więc każda decyzja podjęta w czacie trafia tutaj (albo do komentarza w zadaniu w Linear).

Format nowego wpisu: data, decyzja, krótkie uzasadnienie, link do zadania PRE-xx.

---

## Koncepcja

- **prezentw30s.pl** = „prezent w 30 sekund”: miejsce do szybkiego znalezienia prezentu na różne okazje (urodziny, rocznice, imieniny, święta, walentynki, Dzień Matki/Ojca, ślub, parapetówka).
- Model biznesowy: afiliacja. Polecamy produkty sklepów partnerskich i zarabiamy prowizję od sprzedaży. Nie sprzedajemy sami, nie konkurujemy ze sklepami (np. Prezentmarzeń) – promujemy ich ofertę.
- Wartość dodana: trafny wybór i opis, a nie sama lista linków. Każdy produkt ma „Pasuje, jeśli” (komu i dlaczego).
- Dwa wejścia na stronę:
  1. **Wyszukiwarka 30 s** – 3 pytania: okazja → osoba → budżet → propozycje.
  2. **Statyczne podstrony okazji** (np. `/urodziny/dla-mamy/`) – główne źródło ruchu z Google.

## Domena

| Data | Decyzja |
|---|---|
| 28.10.2026 | Jedyna domena: **prezentw30s.pl**. |
| 28.10.2026 | prezentna30.pl i prezentna40.pl odrzucone całkowicie – nie kupujemy, nie przekierowujemy. |

Uwagi SEO do nazwy: nazwa brandowa, zawiera słowo „prezent”. Słabość: trudna do przekazania ustnie („30s” vs „30 sekund”), dlatego w logo i tytułach konsekwentnie używamy hasła „Prezent w 30 sekund”.

## Poczta

Dostawca: **Zoho Mail**, plan **Mail Lite**, region danych UE (zoho.eu). Na dziś **1 licencja**.

Aktualnie używane skrzynki:

| Adres | Typ | Do czego |
|---|---|---|
| `admin@prezentw30s.pl` | skrzynka (jedyna licencja) | główna skrzynka projektu: administracja, rejestracje w programach partnerskich, DNS/hosting, faktury |
| `kontakt@prezentw30s.pl` | forwarder na `admin@` | adres publiczny na stronie (stopka, „Jak zarabiamy”, polityka prywatności) |

Czego jeszcze nie ma: skrzynek imiennych dla obu wspólników i adresu `partnerzy@` – planowane w PRE-25/PRE-26, ale na razie wszystko idzie przez `admin@`. Druga licencja do dokupienia, gdy pojawi się potrzeba rozdzielenia korespondencji.

Zasady: hasła i dostęp do panelu Zoho w menedżerze haseł – nigdy w repo ani w czacie; 2FA włączone na koncie admina. Rekordy MX/SPF/DKIM/DMARC (`p=none` z raportami) ustawione razem z rekordami Vercela, żeby ich nie nadpisać.

## Stack techniczny

| Data | Decyzja |
|---|---|
| 28.10.2026 | **Astro** + treści w Markdown/MDX (content collections ze schematem). |
| 28.10.2026 | Hosting **Vercel**: podgląd dla każdego PR, produkcja z `main`. |
| 28.10.2026 | **Bez CMS** – obaj wspólnicy pracują w kodzie, Gicie i na Vercelu; treści i produkty edytujemy jako pliki przez PR-y. |
| 28.10.2026 | Linki afiliacyjne w pliku `links.json` w repo, w treściach tylko `/go/slug`. Baza (Supabase) dopiero do analityki kliknięć. |

Kiedy wrócić do decyzji o stacku: konta użytkowników, zapisane listy, panel admina albo tysiące produktów z feedów (wtedy tryb hybrydowy Astro albo Next.js).

### Zasady techniczne
- Wyszukiwarka to jedna interaktywna wyspa Astro; reszta strony to statyczny HTML.
- Google nie wypełnia formularzy, więc wyniki wyszukiwarki **nie zastępują** statycznych podstron okazji. Oba korzystają z tego samego pliku danych produktów.
- Wybory w wyszukiwarce zapisywane w URL (np. `?okazja=urodziny&osoba=mama`).
- Linki `/go/` mają `rel="sponsored nofollow"` i są wyłączone z indeksowania.
- Zdjęcia: komponent `<Image />` (WebP/AVIF, lazy loading). Źródła tylko z materiałów programu partnerskiego, z feedów XML albo z licencją (Unsplash, Pexels). Zdjęć nie trzymamy jako dużych plików w repo bez potrzeby.

### Model danych produktu
nazwa, sklep, slug linku `/go/`, zdjęcie, kategoria, okazje [], osoby [], przedział cenowy, opis, „Pasuje, jeśli”, data ostatniej weryfikacji ceny i dostępności.

## Programy partnerskie

Główna sieć: **webePartners** (jedno konto wydawcy, wiele programów).

| Program | Kategoria | Stawka (z opisów, do weryfikacji w panelu) | Sieć |
|---|---|---|---|
| Prezentokracja.pl | przeżycia | do 6% | webePartners |
| Kosmella.pl | kosmetyki naturalne | do 11,5% | webePartners |
| MultiPerfumeria.pl | perfumy | 6% | webePartners |
| WĘC – Twój Jubiler | biżuteria | 4% | webePartners |
| Brasty.pl | zegarki, perfumy, torebki | 4–8% (strona programu podaje „do 9%”), cookie 60 dni | własny program |
| Prezentmarzeń | przeżycia | brak publicznej stawki – zapytanie (PRE-10) | do ustalenia |

Rezerwa: Paryskie.pl, Sorvella Perfume, Skin79, Facetaria.pl (kosmetyki dla mężczyzn).

Alkohole: **nie wchodzimy** bez weryfikacji prawnej (ustawa o wychowaniu w trzeźwości ogranicza reklamę alkoholu).

### Najważniejsze zasady z regulaminu wydawcy webePartners (wersja od 1.11.2025)
- Treści aktualne, profesjonalne, niewprowadzające w błąd; oferta reklamodawcy aktualizowana na bieżąco.
- Obowiązek wyraźnego oznaczania materiałów promocyjnych.
- Zakazane: Black Hat SEO, brand bidding (nazwy marek reklamodawców w płatnych reklamach), sztuczny ruch i boty, spam, zakazane słowa kluczowe danego programu, manipulowanie cookies.
- Kontakt z reklamodawcami tylko przez webePartners (bezpośrednia współpraca z pominięciem sieci: kara 2000 zł netto).
- Wypłata prowizji od 100 zł; rachunek (osoba prywatna, PESEL) albo faktura (działalność, NIP).
- Regulamin nie zakazuje treści tworzonych z pomocą AI.

Pełny regulamin: https://webepartners.pl/en/terms-of-service/

## Treści i SEO

- Startujemy od **20–40 najczęściej wyszukiwanych kombinacji** okazja + osoba, każda dopracowana. Bez setek generowanych stron (ryzyko uznania za doorway pages / thin content).
- Struktura podstrony: wstęp, data aktualizacji i autor, produkty z „Pasuje, jeśli”, tabela porównawcza, FAQ, linki do powiązanych okazji.
- **AI pisze szkic, człowiek weryfikuje** fakty, ceny i dostępność oraz dodaje własną ocenę. Każda treść przechodzi przegląd drugiego wspólnika w PR.
- **Bez keyword stuffingu** – decyzja ostateczna: grozi karą Google i usunięciem z programów partnerskich, a nie daje efektów.
- Oznaczanie afiliacji: pasek na każdej stronie z produktami, strona „Jak zarabiamy”, `rel="sponsored"`.
- AI Act (art. 50, od 2.08.2026): ustalić, czy i jak oznaczamy treści tworzone z pomocą AI (PRE-8).

## Sposób pracy we dwóch

- Zadania: **Linear**, zespół `PRE`, 4 projekty: Fundament, Programy partnerskie, Wyszukiwarka 30 s (MVP), Treści: podstrony okazji.
- Każdy z nas ma **osobną, prywatną licencję Claude** – nie mamy wspólnego Projektu na claude.ai. Wspólny kontekst dla Claude'a to ten plik i `CLAUDE.md` w repo.
- 1 zadanie w Linear = 1 gałąź (nazwa z Linear, zawiera PRE-xx) = 1 sesja Claude'a.
- Przed startem: przypisz zadanie do siebie i przesuń do „In Progress”. Nie pracujemy równolegle na tych samych plikach.
- Każda zmiana przez PR z podglądem na Vercelu; merge po akceptacji drugiej osoby.
- Sekrety (tokeny, klucze) tylko w zmiennych środowiskowych Vercel – nigdy w repo ani w czacie.

## Materiały

- Mockup strony (prywatny artefakt Claude – do udostępnienia z menu Share): https://claude.ai/artifact/5PQhGm9YoPfzMYLVVmtYhg
- Linear: https://linear.app/prezentw30s

---

## Dziennik decyzji

Nowe wpisy dopisuj na górze listy.

- **31.10.2026** – Rezygnujemy z „Odpuść, jeśli”: strona w ogóle nie mówi o odpuszczaniu. Produkt ma tylko „Pasuje, jeśli”; pole usunięte z modelu danych, różowy zakreślacz usunięty z systemu wizualnego.
- **31.10.2026** – Filtry listy kategorii jako statyczne linki do podstron (bez drugiej wyspy; każdy filtr to indeksowana strona).
- **31.10.2026** – Wspólne progi budżetu w całym serwisie: do 50, do 100, do 200, do 500 zł, powyżej 500 zł.
- **31.10.2026** – Schemat URL: najpierw okazja, potem osoba (`/urodziny/dla-mamy/`); hobby pod `/hobby/` (np. `/hobby/malarz/`); karta produktu pod `/prezent/slug/`.
- **31.10.2026** – Cena i dostępność „nieaktualne” po 30 dniach od weryfikacji: zamiast ceny „Sprawdź aktualną cenę w sklepie”.
- **30.10.2026** – Stan faktyczny poczty: Zoho Mail Lite, 1 licencja – `admin@prezentw30s.pl` jako główna skrzynka i `kontakt@prezentw30s.pl` jako forwarder na nią. Skrzynki imienne i `partnerzy@` odłożone do czasu realnej potrzeby (PRE-26).
- **28.10.2026** – Poczta w domenie: Zoho Mail, plan płatny, 2 skrzynki imienne + aliasy `kontakt@` i `partnerzy@` (PRE-25, PRE-26).
- **28.10.2026** – Astro bez CMS, obaj w kodzie i Gicie (PRE-13).
- **28.10.2026** – Zarządzanie projektem w Linear z integracją GitHub.
- **28.10.2026** – Koncepcja zmieniona z „prezent na okrągłe urodziny” na „prezent w 30 sekund na każdą okazję”; domena prezentw30s.pl, prezentna30/40 odrzucone.
- **28.10.2026** – Dokument decyzji trzymamy w repo (`docs/decyzje.md`), bo mamy osobne licencje Claude.
