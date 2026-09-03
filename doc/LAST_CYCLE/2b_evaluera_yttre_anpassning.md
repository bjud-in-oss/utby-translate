# 2b Evaluera yttre anpassning (TCK-102)

### Yttre begränsningar och samverkan
1. **AI Studio Dev Iframe**:
   - Utvecklingsmiljön körs på port 3000 bakom en omvänd proxy och visas i användarens webbläsare via en `<iframe>`.
   - Externa webbplatser som Zoom tillåter inte att bäddas in via iframes (`X-Frame-Options: SAMEORIGIN`).
   
2. **Netlify Produktion (Mobil QR-skanning)**:
   - I produktion laddas sidan i användarens mobilwebbläsare (toppfönster, inte en inbäddad iframe).
   - Därför SKA meta-refresh och omedelbar omdirigering fungera där.

3. **Lösning**:
   - Genom att lägga skyddet i Vites utvecklingskonfiguration (`vite.config.ts`) hålls utvecklingsmiljöns begränsningar helt åtskilda från den skarpa distributionsartefakten.
