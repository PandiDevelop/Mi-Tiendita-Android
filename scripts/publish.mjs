// Publica el bundle web en Capgo. Lee la version real de la app
// (Web/react-app/src/lib/version.ts, unica fuente de verdad), asegura que
// www/ tenga el build mas reciente y lo sube como update OTA.
// Requisitos: haber hecho login en Capgo (npx capgo login) y que la app
// com.mitiendita.app exista en el dashboard.
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
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

console.log('[publish] subiendo bundle ' + version + ' a Capgo');
execSync(
  `npx capgo upload --appId com.mitiendita.app --dist www --version ${version}`,
  { stdio: 'inherit', cwd: root },
);

console.log('[publish] listo: ' + version);