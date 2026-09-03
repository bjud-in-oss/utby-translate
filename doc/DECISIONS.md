# Beslut och Körtidsregler (Arkitektur)

- **Fristående HTML-leverans**: Omdirigeringssidan ska rymmas i en enda ren `index.html`-fil med inline CSS för sömlös uppdatering via GitHub API och distribution via Netlify.
- **Direkt Omdirigering**: Användning av `<meta http-equiv="refresh" content="0;url=...">` samt en JavaScript-fallback (`window.location.replace`).
- **Tydlig Fallback**: En stor, tillgänglig och mobilanpassad knapp med direktlänk till mötestjänsten om omdirigeringen blockeras av webbläsaren.
- **Design & Trygghet**: Modern, lugnande och professionell visuell stil (svenskkyrklig/tillförlitlig färgpalett, mjuk typografi, subtil laddningsindikator).
- **Inga externa beroenden**: Inga externa CDN-blockerande bibliotek i `index.html` för att garantera omedelbar rendering och maximal tillförlitlighet på mobila nätverk.
