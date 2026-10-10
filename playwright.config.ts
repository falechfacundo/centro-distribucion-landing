import { defineConfig, devices } from '@playwright/test';

const PORT = 4321;
const CI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: CI,
  retries: CI ? 2 : 0,
  workers: CI ? 2 : undefined,
  // WebKit con 6 dispositivos en paralelo satura la CPU: margen para no tener falsos timeouts
  timeout: 60_000,
  reporter: CI ? [['html', { open: 'never' }], ['github']] : [['html', { open: 'never' }], ['list']],
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.01, animations: 'disabled' },
  },
  // Las capturas dependen del SO (render de fuentes): cada plataforma tiene sus propias referencias.
  snapshotPathTemplate: '{testDir}/__screenshots__/{platform}/{projectName}/{testFilePath}/{arg}{ext}',
  use: {
    baseURL: `http://localhost:${PORT}`,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    // REDUCED_MOTION=1 corre la suite con prefers-reduced-motion: reduce
    reducedMotion: process.env.REDUCED_MOTION === '1' ? 'reduce' : 'no-preference',
  },
  projects: [
    { name: 'iphone-se', use: { ...devices['iPhone SE'] } },
    { name: 'iphone-14', use: { ...devices['iPhone 14'] } },
    { name: 'pixel-7', use: { ...devices['Pixel 7'] } },
    { name: 'ipad', use: { ...devices['iPad (gen 7)'] } },
    { name: 'desktop-chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'desktop-safari', use: { ...devices['Desktop Safari'] } },
  ],
  // Siempre contra el build de producción, nunca el dev server. En CI el workflow ya corrió `pnpm build`.
  webServer: {
    command: CI ? `pnpm preview --port ${PORT}` : `pnpm build && pnpm preview --port ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: !CI,
    timeout: 180_000,
  },
});
