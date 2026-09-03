# Ärendehantering (TICKETS)

## TCK-102: Åtgärda vit skärm i förhandsgranskningen (Iframe-skydd)
- **Status**: SLUTFÖRD
- **Domän**: redirect
- **Beskrivning**: I förhandsgranskningen i AI Studio körs sidan inuti en iframe. Taggen `<meta http-equiv="refresh" content="0; url=https://zoom.us/...">` triggar direkt navigering till Zoom, vilket blockeras av webbläsaren med X-Frame-Options och gör förhandsgranskningen helt vit. Åtgärden är att via Vite-utvecklingsservern skydda iframen från att omdirigeras under utveckling samtidigt som index.html behåller den rena meta refresh-taggen intakt för skarp Netlify-distribution.
- **Kriterier**:
  - [ ] `index.html` behåller `<meta http-equiv="refresh" content="0; url=https://zoom.us/...">` i källkoden på disken.
  - [ ] Vite-utvecklingsservern förhindrar att iframen navigerar till Zoom under förhandsgranskning i utvecklingsmiljön.
  - [ ] Förhandsgranskningskortet med välkomstmeddelande och knapp visas krispigt utan vit skärm.

## TCK-101: Mobilanpassad och fristående omdirigeringssida för direktöversättning
- **Status**: SLUTFÖRD
- **Domän**: redirect
