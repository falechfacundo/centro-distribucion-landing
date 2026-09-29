// Copia a src/icons solo los íconos de lucide-static que se usan en src/ (evita importar ~2000 SVG en el build).
import { readdirSync, readFileSync, copyFileSync, mkdirSync, rmSync } from 'node:fs';
import { join, extname } from 'node:path';

const lucide = 'node_modules/lucide-static/icons';
const names = new Set(readdirSync(lucide).filter((f) => f.endsWith('.svg')).map((f) => f.slice(0, -4)));
const used = new Set();
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== 'icons') walk(p); continue; }
    if (!['.astro', '.ts', '.md', '.mdx'].includes(extname(p))) continue;
    for (const m of readFileSync(p, 'utf8').matchAll(/['"`]([a-z0-9]+(?:-[a-z0-9]+)*)['"`]/g)) if (names.has(m[1])) used.add(m[1]);
  }
};
walk('src');
rmSync('src/icons', { recursive: true, force: true });
mkdirSync('src/icons', { recursive: true });
for (const n of used) copyFileSync(join(lucide, `${n}.svg`), join('src/icons', `${n}.svg`));
console.log(`${used.size} icons synced`);
