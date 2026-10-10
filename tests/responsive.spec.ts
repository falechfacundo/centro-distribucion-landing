import { test, expect } from '@playwright/test';
import { allPages } from './helpers/pages';
import { waitForFonts, waitForMotionReady } from './helpers/motion';

/**
 * Deuda conocida: overflow real todavía sin corregir. Marcado con test.fail para que el CI siga verde
 * y avise (el test "pasa inesperadamente") cuando se arregle y haya que quitar la entrada.
 */
const KNOWN_OVERFLOW: Record<string, { maxWidth: number; why: string }> = {
  'es:post:kanban-vs-scrum': { maxWidth: 359, why: 'tabla de .prose-fb sin scroll horizontal (src/styles/prose.css)' },
  'en:post:kanban-vs-scrum': { maxWidth: 359, why: 'tabla de .prose-fb sin scroll horizontal (src/styles/prose.css)' },
};

for (const p of allPages) {
  test(`sin overflow horizontal · ${p.name}`, async ({ page }, info) => {
    const known = KNOWN_OVERFLOW[p.name];
    test.fail(!!known && (info.project.use.viewport?.width ?? 1280) <= known.maxWidth, known?.why);
    await page.goto(p.path);
    await waitForFonts(page);
    await waitForMotionReady(page);

    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(scrollWidth, 'scrollWidth del documento').toBeLessThanOrEqual(clientWidth);

    // body tiene overflow-x: clip, que oculta el desborde en vez de generar scroll:
    // buscar elementos que se salen del viewport sin un ancestro que los recorte a propósito.
    const escaping = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const clippedByAncestor = (el: Element) => {
        for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
          if (getComputedStyle(n).overflowX !== 'visible') return true;
        }
        return false;
      };
      const out: string[] = [];
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        if (!r.width || el.closest('[hidden], .sr-only')) continue;
        const s = getComputedStyle(el);
        if (s.visibility === 'hidden' || s.position === 'fixed') continue;
        if ((r.right > vw + 1 || r.left < -1) && !clippedByAncestor(el)) {
          const id = el.id ? `#${el.id}` : '';
          const cls = [...el.classList].slice(0, 3).map((c) => `.${c}`).join('');
          out.push(`${el.tagName.toLowerCase()}${id}${cls} [${Math.round(r.left)}, ${Math.round(r.right)}] vw=${vw}`);
        }
      }
      return out;
    });
    expect(escaping, 'elementos fuera del viewport').toEqual([]);
  });
}
