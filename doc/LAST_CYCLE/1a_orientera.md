# 1a Orientera – GROW-frågor (TCK-102)

### 1. Goal (Mål & Kontrakt)
Hur åtgärdar vi den vita skärmen i förhandsgranskningen så att sidan renderas snyggt, tryggt och interaktivt i AI Studio, samtidigt som `index.html` behåller sitt exakta kontrakt med `<meta http-equiv="refresh" content="0; url=...">` för Netlify och GitHub API?

### 2. Reality (Nuläge & Resiliens)
Varför blev sidan helt vit? I AI Studio körs appen inbäddad i en iframe. Taggen `<meta http-equiv="refresh" content="0; url=https://zoom.us/...">` exekveras omedelbart av webbläsaren vid sidladdning och försöker navigera iframen till Zoom. Eftersom Zoom skyddar sig med HTTP-headern `X-Frame-Options: SAMEORIGIN` vägrar webbläsaren att visa Zoom inuti iframen, vilket gör att förhandsgranskningsfönstret töms och blir helt vitt.

### 3. Options & Will (Alternativ & Väg framåt)
Hur neutraliserar vi iframe-krocken i utvecklingsservern utan att kompromissa med produktionsfilen? Genom att låta Vite-servern i `vite.config.ts` automatiskt inaktivera den automatiska meta-refresh-omdirigeringen vid lokal förhandsgranskning, visas förhandsgranskningskortet intakt och stabilt i utvecklingsläget medan `index.html` på disken förblir 100 % ren och redo för Netlify.
