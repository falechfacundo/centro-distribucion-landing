import { test, expect } from '@playwright/test';
import { allPages } from './helpers/pages';
import { collectErrors } from './helpers/errors';
import { waitForFonts, waitForMotionReady, settleAnimations, reducedMotion } from './helpers/motion';

for (const p of allPages) {
  test(`sin errores JS y animaciones inicializadas · ${p.name}`, async ({ page }) => {
    const errors = collectErrors(page);
    await page.goto(p.path);
    await waitForFonts(page);
    await waitForMotionReady(page);

    // Lenis agrega la clase `lenis` a <html> al inicializar; con reduced motion no se crea.
    const lenis = await page.evaluate(() => document.documentElement.classList.contains('lenis'));
    expect(lenis, 'Lenis inicializado').toBe(!reducedMotion);

    // recorrer la página dispara los ScrollTrigger (reveals, flow, bento) y deja todo visible
    await settleAnimations(page);
    expect(errors).toEqual([]);
  });
}

test.describe('home · ScrollTrigger', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await waitForMotionReady(page);
  });

  test('Showcase: pin en desktop, tabs en móvil/tablet', async ({ page }, info) => {
    const width = info.project.use.viewport?.width ?? 1280;
    const showcase = page.locator('[data-showcase]');
    if (width >= 1024 && !reducedMotion) {
      // gsap.matchMedia('(min-width: 1024px)') crea el pin → ScrollTrigger envuelve el sticky en .pin-spacer
      await expect(page.locator('.pin-spacer [data-sc-sticky]')).toHaveCount(1);
      const spacer = page.locator('.pin-spacer');
      const box = await spacer.boundingBox();
      // a mitad del recorrido pinneado el paso activo avanza (setStep en onUpdate)
      await page.evaluate((y) => window.scrollTo(0, y), Math.round(box!.y + box!.height * 0.6));
      await expect(showcase).not.toHaveAttribute('data-active', '0');
    } else {
      await expect(page.locator('.pin-spacer')).toHaveCount(0);
      await page.locator('[data-step="2"]').click();
      await expect(showcase).toHaveAttribute('data-active', '2');
    }
  });

  test('reduced motion: sin Lenis y contenido visible sin scrollear', async ({ page }) => {
    test.skip(!reducedMotion, 'correr con REDUCED_MOTION=1');
    const state = await page.evaluate(() => ({
      jsMotion: document.documentElement.classList.contains('js-motion'),
      hidden: [...document.querySelectorAll('[data-reveal], [data-hero-in]')].filter((e) => getComputedStyle(e).opacity !== '1').length,
    }));
    expect(state).toEqual({ jsMotion: false, hidden: 0 });
  });
});
