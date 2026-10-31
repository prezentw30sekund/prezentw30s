# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Markdown/MDX (content collections), hosting Vercel, bez CMS. Wyszukiwarka 30 s to jedna interaktywna wyspa, reszta statyczny HTML (decyzje.md, 28.10.2026).

## Users

Zabiegany kupujący: dorosły 25–45 lat, najczęściej na telefonie, trafia z Google albo social mediów. Ma okazję za kilka dni i brak pomysłu. Chce szybkiej, trafnej decyzji, a nie przeglądania katalogu.

## Product Purpose

prezentw30s.pl („prezent w 30 sekund”) pomaga szybko wybrać trafny prezent na każdą okazję (urodziny, rocznice, imieniny, święta, walentynki, Dzień Matki/Ojca, ślub, parapetówka). Zarabia na afiliacji: poleca produkty sklepów partnerskich, nie sprzedaje sam. Sukces = użytkownik w kilkadziesiąt sekund dostaje kilka dopasowanych propozycji i przechodzi do sklepu.

## Positioning

Trafny wybór i szczery opis zamiast listy linków: każdy produkt ma „Pasuje, jeśli” – konkretnie, komu i dlaczego. Do tego wyszukiwarka 3 pytań (okazja → osoba → budżet).

## Operating Context

- Strona jest przede wszystkim **katalogiem przedmiotów z linkami afiliacyjnymi**. Kategorie powstają z czterech wymiarów: **okazja** (różne, bez wyróżniania urodzin), **osoba / relacja** (mama, znajomy z pracy), **hobby / zainteresowanie** (malarz, wędkarz, gracz) i **budżet**. Przykłady wejść: „malarz, prezent do 200 zł”, „znajomy z pracy, 500 zł”.
- Quiz 30 s jest tylko dodatkiem: kilka szybkich wyborów, które przenoszą do pasującej kategorii katalogu z gotowym filtrem budżetu.
- Typy stron: strona główna, hub (okazji, osoby albo hobby), lista kategorii z filtrami, karta produktu.
- Dwa wejścia: wyszukiwarka 30 s (stan w URL, np. `?okazja=urodziny&osoba=mama`) i statyczne podstrony okazji (np. `/urodziny/dla-mamy/`) – główne źródło ruchu z Google.
- Struktura podstrony: wstęp, data aktualizacji i autor, produkty z „Pasuje, jeśli”, FAQ, powiązane okazje.
- Linki afiliacyjne jako `/go/slug` z `rel="sponsored nofollow"`, mapowane w `links.json`.
- Główna sieć: webePartners (Prezentokracja, Kosmella, MultiPerfumeria, WĘC, Brasty).

## Capabilities and Constraints

- Model danych produktu: nazwa, sklep, slug `/go/`, zdjęcie, kategoria, okazje[], osoby[], przedział cenowy, opis, „Pasuje, jeśli”, data weryfikacji ceny i dostępności.
- Regulamin webePartners: treści aktualne i niewprowadzające w błąd, wyraźne oznaczenie materiałów promocyjnych.
- Zdjęcia tylko z materiałów programów partnerskich, feedów XML albo z licencją (Unsplash, Pexels).
- Bez alkoholi (do weryfikacji prawnej). Bez keyword stuffingu i masowo generowanych stron.
- Otwarte: oznaczanie treści tworzonych z AI (AI Act art. 50, PRE-8).

## Brand Commitments

- Nazwa: prezentw30s.pl; w logo i tytułach konsekwentnie hasło „Prezent w 30 sekund”.
- Głos: kumpel, który zna się na prezentach – na „Ty”, szczerze, z lekkim humorem. Strona nie mówi o odpuszczaniu ani nie zniechęca do produktów.
- Przejrzystość afiliacji: pasek na każdej stronie z produktami, strona „Jak zarabiamy”.

## Evidence on Hand

- Mockup: https://claude.ai/artifact/5PQhGm9YoPfzMYLVVmtYhg (strona główna, podstrona 30. urodzin).
- Brak: zdjęć produktów, cen, opinii, liczby użytkowników, danych o popularności. Nie wymyślać ich – placeholdery `[CENA]`, `[DATA]`, `[IMIĘ]`.

## Product Principles

1. Decyzja w 30 sekund: każdy ekran skraca drogę do trafnego prezentu.
2. Szczerość ponad sprzedaż: „Pasuje, jeśli” mówi konkretnie, komu i dlaczego, bez przesady.
3. Uczciwa afiliacja: zawsze widać, że zarabiamy i jak.
4. Mało, a dobrze: kilka dopracowanych propozycji zamiast długich list.

## Accessibility & Inclusion

WCAG 2.2 AA; cele dotyku ≥ 44 px (użytkownik głównie na telefonie).
