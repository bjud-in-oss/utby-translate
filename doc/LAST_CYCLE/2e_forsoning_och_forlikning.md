# 2e Försoning och förlikning (TCK-102)

### Avvägningar
- Genom att använda ett anpassat Vite-plugin `transformIndexHtml` i `vite.config.ts` uppnår vi maximal separation of concerns:
  1. `index.html` innehåller det exakta, rena och portabla HTML-dokumentet med meta-refresh för produktion.
  2. Utvecklingsservern serverar sidan till iframen utan att trigga den blockerade externa Zoom-navigeringen.
  3. Klick på fallback-knappen i iframen förses med `target="_blank"` om sidan körs i en iframe, så att användaren kan testa länken utan att navigera bort från AI Studio.

**MÄTTNAD: JA**
