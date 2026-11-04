# Visual / mobile audit: prezentw30s.pl (2026-11-04)

Score: 86/100. Pre-launch placeholders are not counted as defects.

Method: Chromium, desktop 1920x1080 and mobile 375x812 (DPR 2, touch). DOM measurements of tap targets and font sizes. Dark mode checked with prefers-color-scheme.
Pages: / , /mikolajki/ , /mikolajki/dla-niej/do-50-zl/. All returned HTTP 200.

## Passes
- Quiz is the first thing on mobile. H1 starts at y=72 and the quiz card ("Na jaką okazję?", Mikołajki / Święta) sits at y~265-470, fully above the fold. "Wolę przeglądać katalog" is directly below it.
- No horizontal overflow: scrollWidth equals viewport width (375 and 1920) on all 3 pages.
- Text size: body text is 15-17px; only one 14px element (home). No text under 14px.
- The theme toggle ("Ciemny motyw", aria-pressed) and the Menu button are reachable in the header and are at least 44px.
- Dark mode works: good contrast, the yellow accent is kept, no broken elements.

## Issues
1. LOW-MEDIUM: tap targets under 44px.
   - Inline link "Jak zarabiamy" in the affiliate disclosure on the home page: 98x18px (mobile y=2745, desktop y=1622). It is the legal disclosure link, so it deserves a larger target.
   - Header logo link on mobile: 197x40px, which is 4px under the 44px rule (all 3 pages).
   - Footer links, breadcrumbs and chips were not flagged, so they are at least 44px.
2. LOW: Home page, mobile. There is a hand-drawn divider under "Wolę przeglądać katalog" with about 90px of empty space around it (y~1040-1135 at 2x). It looks like a stray gap between the quiz and "Przeglądaj katalog".
3. LOW (expected): "Gotowe listy" shows "[N] propozycji" and hatched "zdjęcie" boxes. Six cards, each about 80px tall, take up about 650px of the mobile scroll. Fix before launch. Placeholder brackets like "[N]" must not ship.
4. LOW: placeholder list pages (/mikolajki/ and the do-50-zl page) have a short body, only about 812px of page height. On mobile the footer sits in the middle of the screen with about 400px of empty dotted background below it. This is fine for now but looks unfinished.
5. INFO: the main nav (Katalog / Jak to działa / Jak zarabiamy) is behind the "Menu" button on mobile. This is OK, but the desktop nav links are 15px type, and the nav is duplicated in the DOM (one hidden copy).
6. INFO: the sample card in "Jak to działa" advertises prezentw30s itself ("jeden uśmiech", "sprawdzone 03.11.2026"). This is intentional per PRE-34.

## Screenshots
/Users/kasper/Desktop/prezentw30s/prezentw30s.pl-audit/screenshots/
- home_desktop_fold.png, home_desktop_full.png, home_mobile_fold.png, home_mobile_full.png, home_mobile_dark_fold.png
- mikolajki_desktop_fold.png, mikolajki_desktop_full.png, mikolajki_mobile_fold.png, mikolajki_mobile_full.png, mikolajki_mobile_dark_fold.png
- lista_desktop_fold.png, lista_desktop_full.png, lista_mobile_fold.png, lista_mobile_full.png, lista_mobile_dark_fold.png
- Stale files: prezentw30s_pl_{desktop,laptop,tablet,mobile}.png come from the bundled script's first run. Each URL overwrote the previous one, so they show only the last page (lista). Safe to delete.
