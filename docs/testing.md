# Testing

Dos herramientas: **Playwright** (e2e, responsive, accesibilidad táctil, regresión visual) y **Lighthouse CI**
(performance, accesibilidad, buenas prácticas, SEO). Ambas corren contra el **build de producción**, nunca contra `pnpm dev`.

## Playwright

Config: `playwright.config.ts`. El `webServer` corre `pnpm build && pnpm preview --port 4321` (en CI solo `preview`,
porque el workflow ya hizo el build). Si ya hay algo escuchando en 4321 localmente, se reutiliza: **cerralo si es un
build viejo**.

| Comando | Qué corre |
|---|---|
| `pnpm test:e2e` | Todo menos la regresión visual (`@visual`), en los 6 dispositivos |
| `pnpm test:e2e:ui` | Modo UI interactivo (incluye visual) |
| `pnpm test:mobile` | Igual que `test:e2e` pero solo iPhone SE, iPhone 14 y Pixel 7 |
| `pnpm test:visual` | Solo capturas (`@visual`) |
| `pnpm test:visual:update` | Regenera las capturas de referencia |
| `REDUCED_MOTION=1 pnpm test:e2e` | Toda la suite con `prefers-reduced-motion: reduce` (en PowerShell: `$env:REDUCED_MOTION=1`) |
| `pnpm exec playwright test --project=ipad -g "menú"` | Un dispositivo y un filtro por título |

Dispositivos (projects): `iphone-se` (320px, WebKit), `iphone-14` (390, WebKit), `pixel-7` (412, Chromium),
`ipad` (810, WebKit), `desktop-chrome` (1280), `desktop-safari` (1280, WebKit).

### Specs

| Archivo | Verifica | Alcance |
|---|---|---|
| `responsive.spec.ts` | `scrollWidth ≤ clientWidth` **y** que ningún elemento se salga del viewport sin un ancestro que lo recorte (el `overflow-x: clip` del body oculta desbordes) | 40 páginas × 6 dispositivos |
| `mobile-nav.spec.ts` | Menú: abre/cierra, queda encima, bloquea scroll (`overflow`, `inert`, Lenis frenado), foco, cierre al navegar; rueda dentro del menú a 900px | Dispositivos < 1024px (+ regresión de rueda en desktop-chrome) |
| `touch-targets.spec.ts` | Links/botones ≥ 44×44 (excepción WCAG: links dentro de una oración) | 40 páginas × dispositivos táctiles |
| `visual.spec.ts` (`@visual`) | Captura full-page por dispositivo, con fuentes cargadas, animaciones resueltas y board/timer enmascarados | 9 páginas clave |
| `animations.spec.ts` | Sin errores de consola/JS al recorrer cada página; Lenis inicializado; pin del Showcase en desktop y tabs en móvil | 40 páginas × 6 dispositivos |

Helpers en `tests/helpers/`: `pages.ts` (rutas desde `src/i18n/routes.ts` y `src/content/blog`), `motion.ts`
(`waitForFonts`, `waitForMotionReady`, `settleAnimations`, `freezeAnimations`), `errors.ts`, `viewport.ts`.
Las páginas nuevas del registro de rutas o posts nuevos entran solos en la suite.

> **WebKit en Windows**: con muchos workers puede crashear ("Page crashed", worker con código `3221226505`) en
> páginas al azar. No es un bug del sitio: repetir con `--workers=2`. En CI (Linux) no pasa.

### Reportes

- `pnpm exec playwright show-report`: abre el reporte HTML (`playwright-report/`).
- Fallos: captura en `test-results/`. En CI, primer retry con **trace**: `pnpm exec playwright show-trace <trace.zip>`
  (o arrastrar el zip a trace.playwright.dev).
- En GitHub Actions: artifacts `playwright-report-<dispositivo>` y `test-results-<dispositivo>` de cada job.

### Regresión visual

Las capturas dependen del sistema operativo (render de fuentes), así que **no se versionan ni corren en CI**
(`tests/__screenshots__/` está en `.gitignore`; la ruta incluye la plataforma).

Flujo local: antes de un cambio visual, `pnpm test:visual:update` (genera la referencia) → hacer el cambio →
`pnpm test:visual` → revisar los diffs en el reporte HTML. Tolerancia: 1% de píxeles.

### Deuda conocida (`test.fail`)

Mecanismo para registrar problemas reales que no se pueden corregir en el mismo PR: se marcan como "fallo esperado"
para que el CI quede en verde. Cuando se arreglan, el test **pasa inesperadamente** y Playwright lo marca en rojo:
ahí hay que borrar la entrada.

- `touch-targets.spec.ts` → `KNOWN` (selector + motivo).
- `responsive.spec.ts` → `KNOWN_OVERFLOW` (página + ancho máximo afectado + motivo).

Hoy ambas listas están **vacías**: toda la deuda detectada al crear la suite ya se corrigió.

## Lighthouse CI

Config: `lighthouserc.json` (10 URLs representativas, 3 corridas, mediana). Primero `pnpm build`.

| Comando | Perfil | Resultados |
|---|---|---|
| `pnpm lighthouse` | mobile y luego desktop | `.lighthouseci/` |
| `pnpm lighthouse:mobile` | Mobile por defecto de Lighthouse (Moto G Power, 4G lenta, CPU 4×) | `.lighthouseci/mobile/` |
| `pnpm lighthouse:desktop` | `--collect.settings.preset=desktop` | `.lighthouseci/desktop/` |

Presupuestos:

| Métrica | Umbral | Nivel |
|---|---|---|
| Performance | ≥ 0.85 | warn |
| Accessibility | ≥ 0.95 | **error** |
| Best Practices | ≥ 0.95 | **error** |
| SEO | ≥ 0.95 | **error** |
| LCP | ≤ 2500 ms | warn |
| CLS | ≤ 0.1 | warn |
| TBT | ≤ 300 ms | warn |

Si se rompe:

1. Abrir el HTML de la URL que falla en `.lighthouseci/<perfil>/` (o el artifact `lighthouse` en CI) y ver qué audits fallan.
2. Accesibilidad/SEO/Best Practices (`error`): bloquean el PR. Arreglar el audit (contraste, nombres accesibles, meta,
   errores de consola, etc.). No bajar el umbral sin acordarlo.
3. Performance/métricas (`warn`): no bloquean. Si un PR empeora LCP/CLS/TBT, revisar qué cambió (JS nuevo, imágenes,
   fuentes, animaciones que ocultan el LCP). Cuando el sitio esté estable por encima del umbral, pasar a `error`.
4. Los números locales varían con la máquina: comparar contra la corrida del CI, no contra la propia.

## Prueba manual en dispositivo real

Los navegadores headless no reproducen todo. Antes de un release con cambios de layout o animación:

- [ ] **Scroll con Lenis** en desktop (rueda y trackpad): suave, sin saltos, anclas (`#producto`) con offset correcto.
- [ ] **Safari iOS, barra dinámica**: al scrollear y al aparecer/ocultarse la barra, el pin del Showcase (iPad horizontal) y el tilt del hero no saltan.
- [ ] **Rubber-band iOS**: con el menú abierto el fondo no se mueve; al cerrar, la posición se mantiene.
- [ ] **Menú móvil**: abre/cierra, scroll interno, Escape (teclado externo), links navegan.
- [ ] **Landscape** en teléfono (ej. 740×360): nav, hero, menú y CTAs utilizables.
- [ ] **Tablet ≥ 1024px** (iPad horizontal): dropdowns del nav se abren y cierran con toques.
- [ ] **Gama media Android**: fluidez del board del hero, reveals y Flow; sin tirones con el nav en modo glass.
- [ ] **Reduced motion** activado en el sistema: todo visible, sin Lenis ni reveals.
- [ ] **Red lenta** (DevTools: Slow 4G): el hero aparece rápido y nunca queda en blanco.
