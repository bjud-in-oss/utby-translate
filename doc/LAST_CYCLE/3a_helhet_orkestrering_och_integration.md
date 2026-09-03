# 3a Helhet, orkestrering och integration (TCK-102)

### Orkestrering & Arkitektur

1. **Vite Development Flow**:
   - När Vite startas mountas ett anpassat plugin i `vite.config.ts`.
   - Pluginet använder kroken `transformIndexHtml`.
   - Om anropet sker under utveckling transformeras `<meta http-equiv="refresh" ...>` till en informativ HTML-kommentar, och ett litet script säkerställer att länkar i iframen öppnas med `_blank`.

2. **Produktionsbygge & Netlify-distribution**:
   - `index.html` förblir oförändrad på disk.
   - När Netlify bygger eller när användaren commitar filen till GitHub via dess API, är `index.html` 100 % ren statisk HTML med meta refresh.
