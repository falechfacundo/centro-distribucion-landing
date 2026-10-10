import type { TestInfo } from '@playwright/test';

/** El menú móvil existe por debajo de `lg` (1024px). */
export const hasMobileNav = (info: TestInfo) => (info.project.use.viewport?.width ?? 1280) < 1024;
export const isTouchDevice = (info: TestInfo) => !!info.project.use.isMobile;
