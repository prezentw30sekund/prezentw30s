# Agentic readiness: prezentw30s.pl (checked 2026-11-04)

## Lighthouse Agentic Browsing
Unavailable: PSI HTTP 429 (daily quota, no API key) for mobile and desktop. No X/N reported. Retry with a Google API key.

## Agent-UX heuristic (separate from Lighthouse): 100/100, status complete
- 7 real buttons, 38 anchors, 10 landmarks, 0 div-onclick widgets, 0 unnamed interactive nodes (a11y tree: 360 nodes, 36 interactive, 3 buttons, 33 links).
- Quiz source (Quiz.astro): chips are real <button type="button"> with text names and aria-pressed (updated on click); counter "Pytanie 1 z 3" has aria-live="polite"; "Wróć" back button; summary step has "Pokaż propozycje" real <a href> to the static list URL, "Zacznij od nowa" button; answer-change buttons carry aria-label. An agent can complete the quiz, or skip it by following static links.
- Caveat: the heuristic saw only 3 buttons in the rendered tree, so only the first quiz step is visible at load. Later steps are injected via innerHTML (not verified at runtime). Check that the live region announces step changes and that focus moves to the new question.

## Findings
- P1 (opportunity) robots.txt is 404: no AI-usage preference declared, all crawling allowed by default. Fix: publish robots.txt with a Sitemap line and deliberate groups for training, search and user agents; optionally a Content-Signal line (draft, checked 2026-09-23).
- P1 (info) No /llms.txt (404): Lighthouse drops the audit from the fraction; a valid file would add a counted pass.
- P2 (info) No Markdown delivery (no Accept negotiation, no alternate link, /index.md 404). Opportunity only.
- P2 (info) WebMCP absent (0 registerTool, 0 forms). The quiz is not a form, so a draft WebMCP tool would need to be imperative. W3C CG draft, not a standard (checked 2026-09-23). Opportunity only.
- P3 ai-catalog.json (404), api-catalog, OAuth well-known: not applicable, no matching service.
- Pass: primary content server-rendered (271 words without JS); unknown URLs return a real 404.

## Access policy (declared)
- Training: not declared (no robots.txt), default allowed
- Search: not declared, default allowed
- User-triggered agents: not declared, default allowed
No UA matrix was run (not authorized).

## Standards notes (checked 2026-09-23 per vendor-matrix)
WebMCP: W3C CG draft. Content-Signal: proposal. ai-catalog.json (ARD 1.0): draft. Web Bot Auth: draft. No ranking, citation or traffic effects are promised.

## audit-data.json findings (AI Search Readiness)
[{"title":"robots.txt missing","severity":"medium","description":"/robots.txt returns 404; no AI access policy or sitemap pointer.","recommendation":"Publish robots.txt with Sitemap and explicit groups per agent class."},
{"title":"No llms.txt","severity":"low","description":"/llms.txt 404.","recommendation":"Optional: add valid llms.txt (H1, > summary, Markdown links)."},
{"title":"No Markdown or WebMCP","severity":"info","description":"No Markdown alternates, no WebMCP tools (drafts).","recommendation":"Optional opportunity; consider a WebMCP tool wrapping the quiz."},
{"title":"Lighthouse Agentic unmeasured","severity":"info","description":"PSI quota 429.","recommendation":"Rerun with an API key."}]
