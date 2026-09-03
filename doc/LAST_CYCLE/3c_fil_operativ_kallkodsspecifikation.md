# 3c Filoperativ källkodsspecifikation (TCK-102)

### Källkodsändringar för Fas 2 (Steg 4)

#### Berörda filer
- `vite.config.ts`

#### BORTTAGEN_PROP
BORTTAGEN_PROP: Inga publika egenskaper togs bort.

#### Detaljerad ändringsskiss för `vite.config.ts`:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'preview-guard',
      apply: 'serve',
      transformIndexHtml(html) {
        // Inaktivera automatisk omdirigering enbart under lokal servervisning så att iframen inte blockeras av Zoom
        let transformed = html.replace(
          /<meta\s+http-equiv="refresh"[^>]*>/i,
          '<!-- [Dev-skydd: Meta-refresh inaktiverad i utvecklingsserverns iframe-vy] -->'
        );
        return transformed;
      }
    }
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
```

**BESLUT: GODKÄND**
