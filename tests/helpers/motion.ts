import type { Page } from '@playwright/test';

export const reducedMotion = process.env.REDUCED_MOTION === '1';

/** Espera a que todas las fuentes declaradas terminen de cargar. */
export async function waitForFonts(page: Page) {
  await page.waitForFunction(() => document.fonts.status === 'loaded');
  await page.evaluate(() => document.fonts.ready);
}

/** Espera a que motion.ts haya corrido (marca `data-motion="ready"` en <html>). */
export async function waitForMotionReady(page: Page) {
  await page.waitForFunction(() => document.documentElement.dataset.motion === 'ready');
}

/**
 * Recorre la página para disparar los reveals de ScrollTrigger y espera a que la intro del hero
 * y todos los [data-reveal] visibles terminen (opacity 1). Vuelve arriba al final.
 */
export async function settleAnimations(page: Page) {
  await waitForMotionReady(page);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  // pasos de 80% del viewport: los triggers de reveal (start 'top 89%') no se saltean
  const step = await page.evaluate(() => Math.round(innerHeight * 0.8));
  for (let y = 0; y < height; y += step) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(30);
  }
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForFunction(() =>
    [...document.querySelectorAll<HTMLElement>('[data-reveal], [data-hero-in], .split-line > span')]
      .filter((el) => el.getClientRects().length > 0)
      .every((el) => {
        const s = getComputedStyle(el);
        return s.opacity === '1' && (s.transform === 'none' || s.transform === 'matrix(1, 0, 0, 1, 0, 0)');
      }),
  undefined, { timeout: 15_000 });
  await page.evaluate(() => window.scrollTo(0, 0));
  // el tilt del hero va con scrub (0.6s): dejar que se asiente
  await page.waitForTimeout(1000);
}

/** Corta animaciones y transiciones CSS para capturas estables (GSAP ya terminó en settleAnimations). */
export async function freezeAnimations(page: Page) {
  await page.addStyleTag({
    content: '*, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }',
  });
}

/** Regiones que cambian solas (loop del board, timer en vivo): se enmascaran en las capturas. */
export const dynamicRegions = (page: Page) => [page.locator('[data-hero-stage]'), page.locator('[data-timer]')];
