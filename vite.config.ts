import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const previewGuardPlugin: Plugin = {
  name: 'preview-guard',
  apply: 'serve',
  transformIndexHtml(html) {
    // Inaktivera automatisk omdirigering enbart under lokal servervisning så att iframen inte blockeras av Zoom
    let transformed = html.replace(
      /<meta\s+http-equiv="refresh"[^>]*>/i,
      '<!-- [Dev-skydd: Meta-refresh inaktiverad i utvecklingsserverns iframe-vy] -->'
    );
    // Säkerställ att fallback-knappen i iframen öppnas i en ny flik så att användaren kan provklicka
    transformed = transformed.replace(
      /id="fallback-button"/i,
      'id="fallback-button" target="_blank"'
    );
    return transformed;
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), previewGuardPlugin],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});