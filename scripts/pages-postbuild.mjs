import { readdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
for (const f of readdirSync('dist/assets')) if (f.endsWith('.js') || f.endsWith('.css')) { const p = `dist/assets/${f}`; writeFileSync(p, readFileSync(p, 'utf8').replaceAll('/taxpulse-assets/', '/TaxPulse/taxpulse-assets/')); }
copyFileSync('dist/index.html', 'dist/404.html');
