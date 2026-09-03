# 3b Domän, kontrakt och fraktal dokumentation (TCK-102)

### Domänkontrakt: Dev Server & Preview Resiliens

- **Plats**: `vite.config.ts`
- **Plugin-namn**: `vite-plugin-preview-guard`
- **Kontrakt**:
  - Identifierar `<meta http-equiv="refresh"[^>]*>` och ersätter det vid dev-rendering.
  - Lägger till ett skript som i förhandsgranskning sätter `target="_blank"` på `#fallback-button` så att klick öppnar Zoom i en ny flik istället för att blockeras inuti AI Studios iframe.
  - Ändrar inte produktionskoden på disken.
