// Copia el build web (../Web/react-app/dist) a www/ para que Capacitor lo
// empaquete en la app Android. Es solo una COPIA: el proyecto Web no se toca.
//
// Diferencias a propósito en la copia de la app nativa:
//  - No incluye sw.js ni su registro en index.html. Dentro de la app los
//    archivos ya vienen empaquetados (funciona offline igual de bien) y el
//    service worker solo podría servir versiones viejas en caché. Además el
//    push de la app será nativo, no el push web del service worker.
import { cp, rm, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const src = resolve(root, '..', 'Web', 'react-app', 'dist');
const dest = join(root, 'www');

await rm(dest, { recursive: true, force: true });
await mkdir(dest, { recursive: true });
await cp(src, dest, { recursive: true });

// Quita el service worker: el archivo y la línea que lo registra en el HTML.
await rm(join(dest, 'sw.js'), { force: true });
const htmlPath = join(dest, 'index.html');
let html = await readFile(htmlPath, 'utf8');
html = html.replace(/\s*<script>[^<]*serviceWorker[^<]*<\/script>/, '');
await writeFile(htmlPath, html);

console.log(`copy-web: ${src} -> ${dest} (sin service worker)`);
