import { test, expect } from '@playwright/test';
import { keyPages } from './helpers/pages';
import { waitForFonts, settleAnimations, freezeAnimations, dynamicRegions } from './helpers/motion';

// Las referencias dependen del SO (render de fuentes): no se versionan ni corren en CI.
// Ver docs/testing.md → "Regresión visual".
test.describe('regresión visual', { tag: '@visual' }, () => {
  for (const p of keyPages) {
    test(`${p.name}`, async ({ page }) => {
      await page.goto(p.path);
      await waitForFonts(page);
      await settleAnimations(page);
      await freezeAnimations(page);
      await expect(page).toHaveScreenshot(`${p.name.replace(/:/g, '-')}.png`, {
        fullPage: true,
        mask: dynamicRegions(page),
      });
    });
  }
});
