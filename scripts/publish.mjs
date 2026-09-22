// Publica el bundle web como update OTA gratuita (sin Capgo cloud).
// Lee la version real de la app (Web/react-app/src/lib/version.ts, unica
// fuente de verdad), copia el build web a www/ y deja el zip + latest.json en
// ../Web/bundles para que GitHub Pages los sirva en
//   https://pandi.github.io/Tiendita-Local/bundles/latest.zip
// La app nativa revisa ese latest.json cada vez que abre y aplica el bundle si
// hay version mas nueva.
// NOTA: luego hay que commitear y pushear ../Web (el propio flujo normal de
// publicacion web) para que GitHub Pages lo desplegue.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const versionSrc = readFileSync(
  resolve(root, '..', 'Web', 'react-app', 'src', 'lib', 'version.ts'),
  'utf8',
);
const match = versionSrc.match(/APP_VERSION\s*=\s*'([^']+)'/);
if (!match) throw new Error('No se encontro APP_VERSION en Web/react-app/src/lib/version.ts');
const version = match[1];

console.log('[publish] copiando build web -> www');
execSync('node scripts/copy-web.mjs', { stdio: 'inherit', cwd: root });

const wwwDir = resolve(root, 'www');
const bundlesDir = resolve(root, '..', 'Web', 'bundles');
mkdirSync(bundlesDir, { recursive: true });
const zipPath = resolve(bundlesDir, 'latest.zip');

console.log('[publish] comprimiendo www -> bundles/latest.zip (' + version + ')');
execSync(`tar -a -c -f "${zipPath}" -C "${wwwDir}" .`);

const latestJson = JSON.stringify(
  {
    version,
    url: 'https://pandi.github.io/Tiendita-Local/bundles/latest.zip',
    publishedAt: new Date().toISOString(),
  },
  null,
  2,
);
writeFileSync(resolve(bundlesDir, 'latest.json'), latestJson + '\n');

console.log('[publish] listo: bundles/latest.{zip,json} para version ' + version);
console.log('[publish] falta: commit + push en ../Web para que GitHub Pages lo sirva');