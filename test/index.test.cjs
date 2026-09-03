const fs = require('fs');
const path = require('path');
const assert = require('assert');

const htmlPath = path.join(process.cwd(), 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

console.log('Kör verifieringstester för index.html...');

// Test 1: Kontrollera viewport för mobilanpassning
assert.ok(
  content.includes('<meta name="viewport" content="width=device-width, initial-scale=1.0'),
  'Sidan ska ha en korrekt viewport-tagg för mobila enheter.'
);

// Test 2: Kontrollera meta refresh 0 sekunder
assert.ok(
  /<meta\s+http-equiv="refresh"\s+content="0;\s*url=https:\/\/[^"]+"/i.test(content),
  'Sidan ska innehålla en meta refresh-tagg med 0 sekunders fördröjning.'
);

// Test 3: Vänligt svenskt välkomstmeddelande
assert.ok(
  content.includes('Välkommen!') && content.includes('Du skickas nu till direktöversättningen...'),
  'Sidan ska visa det exakta välkomstmeddelandet på svenska.'
);

// Test 4: Tydlig fallback-länk/knapp
assert.ok(
  content.includes('href="https://') && (content.includes('Klicka här') || content.includes('Anslut manuellt') || content.includes('Öppna direktöversättningen')),
  'Sidan ska ha en tydlig klickbar fallback-knapp med mållänken.'
);

// Test 5: Inga externa blockerande CDN-skript för maximal pålitlighet
assert.ok(
  !content.includes('cdn.tailwindcss.com'),
  'Sidan ska inte förlita sig på externa CDN-bibliotek för styling.'
);

// Test 6: Inbäddad CSS med <style>
assert.ok(
  content.includes('<style>') && content.includes('</style>'),
  'Sidan ska använda inbyggd CSS för att rymmas i en ren index.html-fil.'
);

console.log(' Alla 6 testerna för index.html passerade felfritt!');
