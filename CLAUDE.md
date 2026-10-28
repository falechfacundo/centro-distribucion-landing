# Centro Distribución · Landing

Landing estática (ES/EN) de Centro Distribución. El contenido comercial se localiza en `src/i18n/`; las capacidades que siguen en diseño o roadmap deben identificarse como tales.

## Stack

- **Astro 7.3** (estático, `build.format: 'directory'`, `trailingSlash: 'always'`, i18n ES default sin prefijo / EN en `/en/`)
- **Tailwind 4.3** configurado en CSS (`@theme` en `src/styles/global.css`, sin `tailwind.config`)
- **GSAP 3.15** (ScrollTrigger, Flip) + **Lenis 1.3** en un único script: `src/scripts/motion.ts`
- **pnpm 12** · Node 22 · TypeScript strict
- Tests: **Playwright 1.64** + **Lighthouse CI**

## Comandos

```bash
pnpm dev                  # http://localhost:4321 (solo para desarrollar)
pnpm build                # dist/ (corre sync-icons antes)
pnpm preview              # sirve dist/ en :4321
pnpm check                # astro check (tipos, incluye tests/)
pnpm test:e2e             # Playwright sin visual, 6 dispositivos (hace build + preview solo)
pnpm test:mobile          # solo iPhone SE, iPhone 14, Pixel 7
pnpm test:visual          # capturas (solo local); test:visual:update para regenerar
pnpm build && pnpm lighthouse   # Lighthouse CI mobile + desktop → .lighthouseci/
```

## Estructura

```
src/
  pages/        index, en/index, [...slug] (genera las páginas de routes.ts), blog/, en/blog/, 404, robots.txt
  views/        una vista por tipo de página (Home, FeaturePage, PricingPage, ComparePage, LegalPage, ...)
  components/   Nav, Footer, Hero, HeroBoard, Showcase, Bento, Flow, Details, CTA, InnerHero, Faq, CtaBand, Icon...
  i18n/         routes.ts (registro de rutas ES/EN) + textos por página (home, features, pages, ui, blog)
  content/blog/ posts Markdown en es/ y en/, unidos por translationKey
  scripts/motion.ts   toda la animación
  styles/       global.css (tokens + utilidades), prose.css (blog/legal)
tests/          specs de Playwright + helpers/
docs/           design-system, animations, testing, project-context
```

## Convenciones

- Textos: nunca hardcodeados en componentes; van en `src/i18n/*` con versión `es` y `en`.
- Páginas nuevas: agregar la clave en `src/i18n/routes.ts` (slug por idioma) + vista; los tests las toman solas.
- Íconos: `<Icon name="..." />` con nombres de lucide; `scripts/sync-icons.mjs` copia solo los usados.
- Estilos: utilidades de Tailwind en el markup; CSS propio en `<style is:global>` del componente, con clases cortas y tokens (`var(--color-*)`).
- Animación: enganchar por `data-*` (`data-reveal`, `data-hero-in`, `data-magnetic`...), estado inicial en CSS bajo `.js-motion`.
- Comentarios breves y solo para explicar el porqué. El código mezcla español e inglés; los nuevos, en español.
- Commits: conventional commits en español (`fix(nav): ...`), atómicos.

## Reglas no negociables

1. **Mobile-first**: verificar 320px (iPhone SE). Nada puede salirse del viewport: `body` tiene `overflow-x: clip` y lo oculta en vez de mostrarlo.
2. **Nada de `100vh`**: `svh`/`dvh` en CSS, `innerHeight` en JS.
3. **`gsap.matchMedia()`** para todo comportamiento distinto entre móvil y desktop; devolver la limpieza.
4. **Reduced motion**: toda animación nueva necesita estado final estático (bloque `if (reduced)` en `motion.ts`).
5. **Animar solo transform/opacity** en lo que depende del scroll.
6. **`:hover` propios dentro de `@media (hover: hover)`**; efectos de puntero solo con `finePointer`.
7. **Scroll interno** con `data-lenis-prevent` + `overscroll-behavior: contain`.
8. **Targets táctiles ≥ 44×44** en móvil: agrandar con `@media (pointer: coarse)` o padding + margen negativo, sin cambiar el layout con mouse.
9. Tests contra el build (`preview`), nunca contra el dev server. `pnpm test:e2e` en verde antes de un PR.
10. Sin secretos en el repo ni en docs (`.env*` está ignorado).
11. **Contraste AA (4.5:1)** en todo texto, incluidos los mocks del producto; texto terciario con `fg-3`, nunca más oscuro.

## Docs

- [docs/design-system.md](docs/design-system.md): breakpoints, tokens, tipografía, patrones de componentes
- [docs/animations.md](docs/animations.md): inicialización de GSAP/Lenis, convenciones, animaciones por sección
- [docs/testing.md](docs/testing.md): suites, snapshots, Lighthouse, deuda conocida, checklist en dispositivo real
- [docs/project-context.md](docs/project-context.md): producto, páginas, integraciones, env vars, decisiones técnicas


