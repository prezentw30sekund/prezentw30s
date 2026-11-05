# Jak generować linki afiliacyjne

Instrukcja dla osoby, która dodaje produkty na listy. Każdy produkt potrzebuje dwóch rzeczy:

1. **linku afiliacyjnego**, czyli linku z naszym oznaczeniem, za który sklep płaci nam prowizję;
2. **adresu zdjęcia** z oferty.

Gotowe linki i zdjęcia wklejasz do [produkty-do-list.md](produkty-do-list.md). Resztę robi Claude: dopisuje link do `src/data/links.json` (strona odsyła do niego przez `/go/<slug>/`) i wstawia produkt na listę.

Zrzuty ekranu wrzucaj do folderu `docs/img/` pod nazwami podanymi niżej. Dopóki pliku nie ma, w podglądzie zobaczysz zamiast obrazka sam opis.

---

## Amazon.pl (Amazon Associates)

Nasz identyfikator partnera (tag) to **`prezentw30s-21`**. Każdy link z Amazona musi go zawierać.

### Link

1. Zaloguj się na konto Amazon, które jest podpięte do programu partnerskiego.
2. Wejdź na stronę produktu na amazon.pl. U góry strony pojawi się pasek **SiteStripe** (pasek programu partnerskiego).
3. W pasku kliknij przycisk do pobrania linku tekstowego i skopiuj **krótki link**, który zaczyna się od `https://link.amazon/`.
4. Sprawdź, czy w pasku wybrany jest tag `prezentw30s-21`.

![Pasek SiteStripe na stronie produktu Amazon](img/amazon-sitestripe.png)
<!-- Zrzut: pasek SiteStripe z widocznym tagiem prezentw30s-21 i krótkim linkiem. -->

Dobry link wygląda tak: `https://link.amazon/B0dpikCrs`

Nie wklejaj zwykłego adresu z paska przeglądarki (`https://www.amazon.pl/...`). Nie ma w nim naszego tagu, więc nie dostaniemy prowizji.

### Zdjęcie

1. Na stronie produktu kliknij prawym przyciskiem na **główne zdjęcie**.
2. Wybierz „Kopiuj adres obrazu”.
3. Adres zaczyna się od `https://m.media-amazon.com/images/I/`.

![Kopiowanie adresu zdjęcia na Amazonie](img/amazon-zdjecie.png)
<!-- Zrzut: menu po kliknięciu prawym przyciskiem na zdjęcie produktu, z zaznaczonym „Kopiuj adres obrazu”. -->

### Ważne przy Amazonie

- Na stronie **nie podajemy cen produktów z Amazona**. Zasady programu nie pozwalają pokazywać stałych cen spoza ich API, więc nie wpisuj ceny w arkuszu.
- Oświadczenie „Jako Partner Amazon zarabiamy na kwalifikujących się zakupach.” jest już w stopce. Nie trzeba go dodawać przy produktach.

---

## Allegro (Allegro Affiliate Business)

### Link

1. Zaloguj się na konto firmowe Allegro, które jest w programie Allegro Affiliate Business.
2. Otwórz ofertę na allegro.pl i skopiuj jej adres.
3. Wejdź do **Panelu Wydawcy** programu i w generatorze linków wklej adres oferty.
4. Skopiuj wygenerowany link. Zaczyna się od `https://allegro.pl/affiliate?redirect_url=` i na końcu ma `utm_medium%3Dafiliacja`.

![Generator linków w Panelu Wydawcy Allegro](img/allegro-generator.png)
<!-- Zrzut: generator linków w Panelu Wydawcy z wklejonym adresem oferty i gotowym linkiem. -->

Dobry link wygląda tak:
`https://allegro.pl/affiliate?redirect_url=https://allegro.pl/produkt/...?offerId%3D12611758795%26utm_medium%3Dafiliacja%26utm_source%3Dctr_b%26utm_campaign%3D...`

Nie wklejaj zwykłego adresu oferty (`https://allegro.pl/oferta/...`). Bez przekierowania przez `affiliate` nie dostaniemy prowizji.

### Zdjęcie

1. W ofercie kliknij prawym przyciskiem na **główne zdjęcie** w galerii.
2. Wybierz „Kopiuj adres obrazu”.
3. Adres zaczyna się od `https://a.allegroimg.com/`.

![Kopiowanie adresu zdjęcia na Allegro](img/allegro-zdjecie.png)
<!-- Zrzut: menu po kliknięciu prawym przyciskiem na zdjęcie w galerii oferty. -->

Claude nie pobiera stron Allegro samodzielnie, bo Allegro je blokuje, więc adres zdjęcia z Allegro musisz zawsze podać sam. Przy Amazonie Claude zwykle znajdzie zdjęcie sam, ale wklejony adres i tak przyspiesza pracę.

### Ważne przy Allegro

- Cenę z Allegro możesz wpisać w arkuszu razem z datą sprawdzenia. Pokażemy ją na karcie produktu.
- Nie używamy logo Allegro na stronie. Regulamin zabrania używania znaków towarowych bez zgody, a sama nazwa sklepu przy produkcie jest w porządku.
- Wymagane oświadczenie Allegro jest już w stopce.

---

## Zanim wkleisz do arkusza

- [ ] Link z Amazona zaczyna się od `https://link.amazon/`, a link z Allegro od `https://allegro.pl/affiliate?redirect_url=`.
- [ ] Po otwarciu linku w przeglądarce trafiasz na właściwy produkt, a nie na inny wariant albo inną ofertę.
- [ ] Masz adres zdjęcia (obowiązkowo przy Allegro).
- [ ] Produkt nie jest alkoholem.
- [ ] Jest jedno zdanie „Dla kogo / dlaczego”. Opisuj to, co widać w ofercie, bez „hit roku” i ocen, których nie da się sprawdzić.
