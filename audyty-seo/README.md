# Audyty SEO

Każdy audyt ma własny folder nazwany datą: `audyty-seo/RRRR-MM-DD/`. Starych audytów nie nadpisujemy, dzięki temu widać, co się poprawiło między kolejnymi.

| Data | Wynik | Uwagi |
|---|---|---|
| [2026-11-04](2026-11-04/ACTION-PLAN.md) | 49/100 | pierwszy pełny audyt produkcji przed sezonem (PRE-36) |

## Jak zrobić nowy audyt

1. W Claude Code uruchom:

   ```
   /claude-seo:seo-audit https://prezentw30s.pl full audit with subagents and PDF
   ```

2. Skill zapisuje wyniki do folderu `prezentw30s.pl-audit/` w katalogu głównym. Ten folder jest w `.gitignore`, żeby nie trafił do repo przez pomyłkę.
3. Po zakończeniu przenieś go do folderu z dzisiejszą datą:

   ```
   mv prezentw30s.pl-audit audyty-seo/$(date +%F)
   ```

4. Dopisz wiersz z datą i wynikiem do tabeli wyżej.
5. Porównaj nowy `ACTION-PLAN.md` z poprzednim i załóż w Linear zadania na nowe punkty.

## Co jest w folderze audytu

- `ACTION-PLAN.md`: lista poprawek od Critical do Low, od tego zaczynamy;
- `FULL-AUDIT-REPORT.md`: pełny raport;
- `findings/`: szczegóły z każdej kategorii (technical, content, schema…);
- `screenshots/`: zrzuty strony na telefonie i na desktopie;
- `audit-data.json`, `charts/` i raport HTML/PDF: dane do raportu.

Pliki `render.*` to robocze logi narzędzia, nie trafiają do repo.
