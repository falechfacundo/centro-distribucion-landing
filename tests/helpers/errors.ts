import type { Page } from '@playwright/test';

/** Junta errores de consola y excepciones no capturadas desde que se llama. */
export function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on('console', (msg) => msg.type() === 'error' && errors.push(`console: ${msg.text()}`));
  page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));
  return errors;
}
