# 2a Förändra utåt – Vision & Målbild (TCK-102)

### Vision
Att göra det möjligt för arkitekten/utvecklaren att direkt i AI Studios förhandsgranskningsvy se, inspektera och testa kortets visuella layout, laddningsindikator och fallback-knapp utan att webbläsaren omedelbart navigerar bort iframen till en blockerad extern Zoom-sida.

### Nyckelaspekter:
- **Stabil förhandsgranskning**: Vyn i AI Studio visar kortet i all sin glans med den mjuka laddningsringen, välkomstmeddelandet och knappen.
- **Produktionsintegritet**: Inga fula hacks i källfilen `index.html`. Den förblir en ren, portabel produktionsartefakt med 0-sekunders meta-refresh för Netlify.
- **Klickbar fallback**: I förhandsgranskningen kan användaren klicka på knappen "Öppna direktöversättningen" och länken öppnas säkert utan att krascha iframen.
