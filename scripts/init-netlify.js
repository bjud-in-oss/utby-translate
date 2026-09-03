import fs from 'fs';
import path from 'path';

// Konfiguration för Netlify
const netlifyConfig = `
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    Permissions-Policy = "screen-wake-lock=*, microphone=*, camera=*, geolocation=*"
    Cache-Control = "public, max-age=0, must-revalidate"
`;

try {
  const outputPath = path.join(process.cwd(), 'netlify.toml');
  
  fs.writeFileSync(outputPath, netlifyConfig.trim());
  console.log('✅ netlify.toml har uppdaterats med build-instruktioner.');
  console.log('   Mål:', outputPath);
} catch (error) {
  console.error('❌ Misslyckades med att skapa netlify.toml:', error);
  process.exit(1);
}