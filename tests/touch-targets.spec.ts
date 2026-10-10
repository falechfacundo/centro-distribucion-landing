import { test, expect, type Page } from '@playwright/test';
import { allPages } from './helpers/pages';
import { waitForMotionReady } from './helpers/motion';
import { isTouchDevice } from './helpers/viewport';

const MIN = 44;

/**
 * Deuda conocida (auditoría móvil): targets bajo 44px que todavía no se corrigieron.
 * Se excluyen del chequeo general y se vigilan en el test `deuda conocida` (marcado test.fail):
 * cuando se arreglen, ese test empieza a pasar y Playwright avisa para quitar la entrada.
 */
const KNOWN: { selector: string; why: string }[] = [
  { selector: 'footer .fl a', why: 'links del footer (~19px de alto)' },
  { selector: 'footer a[hreflang]', why: 'selector de idioma del footer (38px)' },
  { selector: '#nav-bar > a', why: 'logo del nav (29px)' },
  { selector: '#nav-bar .btn-sm', why: 'CTA del nav (btn-sm, 38px)' },
  { selector: '#nav-bar .nl', why: 'links "EN"/"Ingresar" del nav desde 640px (33-38px)' },
  { selector: 'nav[aria-label="Breadcrumb"] a', why: 'breadcrumbs (17px)' },
  { selector: 'a[href^="mailto:"]', why: 'email en /contacto (36px)' },
  { selector: 'main a.mt-12[href$="/blog/"]', why: '"← Volver" en posts (22px)' },
];

type Target = { desc: string; w: number; h: number; known: boolean };

async function smallTargets(page: Page): Promise<Target[]> {
  return page.evaluate(({ MIN, known }) => {
    const out: { desc: string; w: number; h: number; known: boolean }[] = [];
    const sel = 'a[href], button, summary, [role="button"], input:not([type="hidden"]), select, textarea';
    for (const el of document.querySelectorAll<HTMLElement>(sel)) {
      if (el.closest('[hidden], [inert], .sr-only')) continue;
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      if (!r.width || !r.height || s.visibility === 'hidden' || s.opacity === '0') continue;
      // excepción WCAG 2.5.8: link dentro de una oración (inline y rodeado de texto)
      const parentText = el.parentElement?.textContent?.trim().length ?? 0;
      const ownText = el.textContent?.trim().length ?? 0;
      if (s.display === 'inline' && parentText > ownText + 10) continue;
      // tolerancia de medio píxel: un 44px puede medir 43.99 por redondeo de subpíxeles
      if (r.width >= MIN - 0.5 && r.height >= MIN - 0.5) continue;
      const area = el.closest('footer:not(main footer)') ? 'footer' : el.closest('#nav') ? 'nav' : el.closest('main') ? 'main' : 'body';
      const text = (el.textContent || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 30);
      out.push({ desc: `${area} › ${el.tagName.toLowerCase()} "${text}" ${Math.round(r.width)}x${Math.round(r.height)}`, w: r.width, h: r.height, known: known.some((k) => el.matches(k)) });
    }
    return out;
  }, { MIN, known: KNOWN.map((k) => k.selector) });
}

test.describe('targets táctiles ≥ 44x44 en móvil', () => {
  test.beforeEach(({}, info) => test.skip(!isTouchDevice(info), 'solo dispositivos táctiles'));

  for (const p of allPages) {
    test(`${p.name}`, async ({ page }) => {
      await page.goto(p.path);
      await waitForMotionReady(page);
      const bad = (await smallTargets(page)).filter((t) => !t.known).map((t) => t.desc);
      expect([...new Set(bad)]).toEqual([]);
    });
  }

  test('deuda conocida', async ({ page }) => {
    test.fail(KNOWN.length > 0, `pendiente: ${KNOWN.map((k) => k.why).join(' · ')}`);
    await page.goto('/');
    await waitForMotionReady(page);
    expect((await smallTargets(page)).filter((t) => t.known).map((t) => t.desc)).toEqual([]);
  });
});
