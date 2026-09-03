# 1b Kartlägga – Svar och Systemtillstånd (TCK-102)

### Svar på GROW-frågorna:

1. **Kontrakt & Mål**:
   - `index.html` ska bibehålla sin fristående utformning och det strikta kravet på en 0-sekunders meta-refresh i `<head>` för den skarpa distributionen till Netlify via GitHub-repot.
   
2. **Nuläge & Resiliens (Varför vit skärm?)**:
   - AI Studios förhandsgranskning renderar appen i en iframe (`https://ais-dev-...`).
   - När webbläsaren träffar `<meta http-equiv="refresh" content="0; url=https://zoom.us/...">` försöker den omedelbart navigera iframen till Zoom.
   - Zoom skickar säkerhetsheadern `X-Frame-Options: SAMEORIGIN` (och CSP-direktiv) som förbjuder inbäddning i iframes. Webbläsaren kastar ett säkerhetsundantag och lämnar fönstret blankt/vitt (`about:blank` / render blocking).
   
3. **Alternativ & Väg framåt**:
   - Vi implementerar ett lättviktigt skydd i `vite.config.ts` via `transformIndexHtml`. När Vite servar `index.html` till utvecklingsmiljön inaktiveras meta-refreshen enbart i utvecklingsserverns svar till iframen.
   - Källkodsfilen `index.html` på disken förblir helt oförändrad och ren för git-commits och Netlify.

```json
{
  "status": "PLANERING",
  "current_domain": "redirect",
  "next_step": "2a_forandra_utat_vision",
  "ticket_id": "TCK-102",
  "active_skill": "none",
  "active_vectors": ["Resilience"]
}
```
