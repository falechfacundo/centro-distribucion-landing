import { test, expect } from '@playwright/test';
import { waitForMotionReady, reducedMotion } from './helpers/motion';
import { hasMobileNav } from './helpers/viewport';

test.describe('menú móvil', () => {
  test.beforeEach(async ({ page }, info) => {
    test.skip(!hasMobileNav(info), 'el menú móvil solo existe por debajo de 1024px');
    await page.goto('/');
    await waitForMotionReady(page);
  });

  test('abre y cierra con el botón', async ({ page }) => {
    const toggle = page.locator('#nav-toggle');
    const menu = page.locator('#mobile-menu');
    await expect(toggle).toBeVisible();
    await expect(menu).toBeHidden();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(menu).toBeVisible();
    // queda por encima del contenido: el punto central de la pantalla pertenece al menú
    const onTop = await page.evaluate(() => {
      const el = document.elementFromPoint(innerWidth / 2, innerHeight / 2);
      return !!el?.closest('#mobile-menu');
    });
    expect(onTop).toBe(true);

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeHidden();
  });

  test('bloquea el scroll del fondo mientras está abierto', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.locator('#nav-toggle').click();
    const locked = await page.evaluate(() => ({
      overflow: getComputedStyle(document.documentElement).overflow,
      mainInert: document.getElementById('main')!.inert,
      lenisStopped: document.documentElement.classList.contains('lenis-stopped'),
      menuScrollable: getComputedStyle(document.getElementById('mobile-menu')!).overflowY,
    }));
    expect(locked.overflow).toBe('hidden');
    expect(locked.mainInert).toBe(true);
    expect(locked.menuScrollable).toBe('auto');
    if (!reducedMotion) expect(locked.lenisStopped, 'Lenis frenado').toBe(true);

    await page.keyboard.press('Escape');
    const after = await page.evaluate(() => ({
      overflow: document.documentElement.style.overflow,
      mainInert: document.getElementById('main')!.inert,
      y: Math.round(scrollY),
    }));
    expect(after).toEqual({ overflow: '', mainInert: false, y: 600 });
  });

  test('gestiona el foco: entra al menú y vuelve al botón con Escape', async ({ page }) => {
    await page.locator('#nav-toggle').click();
    await expect(page.locator('#mobile-menu a').first()).toBeFocused();
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-menu')).toBeHidden();
    await expect(page.locator('#nav-toggle')).toBeFocused();
  });

  test('cierra al navegar con un link del menú', async ({ page }) => {
    await page.locator('#nav-toggle').click();
    await page.locator('#mobile-menu a').first().click();
    await page.waitForURL(/\/funciones\//);
    await expect(page.locator('#mobile-menu')).toBeHidden();
  });
});

// Regresión: con rueda/trackpad, Lenis scrolleaba la página de fondo en vez del menú.
test('la rueda dentro del menú scrollea el menú, no la página', async ({ page }, info) => {
  test.skip(info.project.name !== 'desktop-chrome' || reducedMotion, 'requiere mouse (wheel) y Lenis activo');
  await page.setViewportSize({ width: 900, height: 600 });
  await page.goto('/');
  await waitForMotionReady(page);
  await page.locator('#nav-toggle').click();
  await page.mouse.move(450, 400);
  for (let i = 0; i < 6; i++) await page.mouse.wheel(0, 300);
  await expect.poll(() => page.evaluate(() => document.getElementById('mobile-menu')!.scrollTop)).toBeGreaterThan(0);
  expect(await page.evaluate(() => scrollY)).toBe(0);
});
