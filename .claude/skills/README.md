# Skille używane przy budowie

Skille i pluginy z tabel poniżej instalujemy u siebie (user-level), więc każdy z nas robi to osobno.

## Wspólne skille projektu (w tym katalogu)

- `przeglad-afiliacji`: przegląd PR pod kątem afiliacji, SEO i treści

## Pluginy Claude Code

| Plugin | Do czego | Instalacja |
|---|---|---|
| superpowers | proces: brainstorming, plany, TDD, debugowanie, review | `/plugin install superpowers@claude-plugins-official` |
| ponytail | najmniejsza zmiana, która w pełni rozwiązuje zadanie (`/ponytail`, `/ponytail-review`) | `/plugin marketplace add DietrichGebert/ponytail` → `/plugin install ponytail@ponytail` |
| claude-seo | audyty SEO, schema, sitemap, treści pod AI search | `/plugin marketplace add AgriciDaniel/claude-seo` → `/plugin install claude-seo@agricidaniel-claude-seo` |

## Skille

| Skill | Do czego | Źródło |
|---|---|---|
| impeccable | **każda zmiana wyglądu lub layoutu** idzie przez ten skill; korzysta z `DESIGN.md`, `PRODUCT.md`, `.impeccable/` | [impeccable.style](https://impeccable.style/docs/), repo `pbakaus/impeccable` |
| no-ai-slop | redakcja tekstów, żeby nie brzmiały jak AI (zob. PRE-12) | `npx skills add petergyang/no-ai-slop` |
