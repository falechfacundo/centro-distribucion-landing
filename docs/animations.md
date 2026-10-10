# Animaciones

Stack: **GSAP 3.15** (plugins `ScrollTrigger` y `Flip`) + **Lenis 1.3.26**. Todo vive en un único script global:
`src/scripts/motion.ts`, cargado en `src/layouts/Layout.astro:86` (`<script>import '../scripts/motion.ts'</script>`).
No hay islands, hooks ni componentes con su propia lógica de animación.

## Inicialización (orden de ejecución)

| Paso | Dónde | Qué hace |
|---|---|---|
| 1 | `Layout.astro:72-79` (inline, en `<head>`) | Si no hay `prefers-reduced-motion`, agrega `js-motion` a `<html>`. Fallback: si `motion.ts` no marcó `data-motion` en 4s, quita la clase para no dejar contenido oculto. |
| 2 | `global.css:170-172, 185` | Con `.js-motion`, oculta los estados iniciales: `[data-reveal]` (opacity 0, `translateY(28px)`), `.split-line > span` (`translateY(110%)`), `[data-hero-in]` (opacity 0). |
| 3 | `motion.ts:6` | `gsap.registerPlugin(ScrollTrigger, Flip)` |
| 4 | `motion.ts:13-15` | Marca `data-motion="ready"` y calcula `reduced` (reduced motion **o** falta de `js-motion`). |
| 5 | `motion.ts:30-34` | Lenis: `new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true })`, `lenis.on('scroll', ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t * 1000))`, `lagSmoothing(0)`. Escucha `menu:toggle` (lo emite `Nav.astro`) para `stop()`/`start()`. |
| 6 | `motion.ts:74-77`, `371` | `ScrollTrigger.refresh()` tras `document.fonts.ready` y en `load`. |

## Convenciones

- **Lenis solo suaviza la rueda** (`smoothWheel`). El touch queda nativo (sin `syncTouch`): en móvil el scroll es el del sistema.
- **Scroll interno**: cualquier contenedor con scroll propio dentro de la página lleva `data-lenis-prevent` (hoy: `#mobile-menu`) y `overscroll-behavior: contain`.
- **Anclas**: los `a[href^="#"]` se interceptan en `motion.ts` y usan `lenis.scrollTo(y, { duration: 1.4 })` (o `scrollTo` nativo en reduced motion).
- **Mobile vs desktop**: `gsap.matchMedia()` se usa donde el comportamiento cambia por breakpoint (Showcase, `motion.ts:278-311`). Al cruzar el breakpoint, GSAP revierte el contexto y quita el pin.
- **Efectos de puntero** (tilt del hero, magnetic, spotlight) solo con `(hover: hover) and (pointer: fine)` (`finePointer`, `motion.ts:16`). Los `:hover` propios en CSS van dentro de `@media (hover: hover)`.
- **Cleanup**: el sitio es multipágina y no usa View Transitions; cada navegación recarga el documento, así que no hay `ctx.revert()` global. La única limpieza explícita es la de `gsap.matchMedia()` (los `return () => …` de cada `mm.add`). Si se agregan View Transitions, envolver todo en `gsap.context()` y revertirlo en `astro:before-swap`.
- **Propiedades animadas**: transform y opacity en todo lo que depende del scroll. Excepciones chicas y acotadas: `width` de la barra de progreso del board (`motion.ts:151`) y keyframes CSS de `width`/`height` en barras del Bento (`Bento.astro`).
- **Reduced motion**: con `prefers-reduced-motion: reduce` no se crea Lenis ni ScrollTrigger de reveals; `motion.ts:18-25` aplica el estado final (bento `.in`, contadores, flow, barras). En CSS, `global.css:181-183` reduce animaciones/transiciones a ~0ms.
- **Hooks en el markup**: las animaciones se enganchan por atributos `data-*`, no por clases de estilo (ver tabla).

## Animaciones por sección

| Sección / hook | Archivo | Comportamiento | Móvil (<1024px) | Desktop |
|---|---|---|---|---|
| Intro (`#nav`, `.split-line > span`, `[data-hero-in]`, `.app .card`) | `motion.ts:79-93` | Timeline `expo.out`: nav (1.2s), líneas del h1 (1.5s, stagger 0.13), `[data-hero-in]` (1.3s, stagger 0.1 desde 0.55s), cards del board (0.9s desde 1.3s) | Igual | Igual |
| Tilt del hero (`[data-hero-tilt]`) | `motion.ts:95-98` | `rotateX 24°→0` y `scale .9→1` con `scrub: 0.6` | Igual | Igual + tilt con el puntero (`quickTo`, solo `finePointer`) |
| Parallax (`[data-parallax]`) | `motion.ts:110-112` | `y` con `scrub` dentro de `#top` | Elementos ocultos (`hidden lg:block`) | Activo |
| Board en vivo (`[data-board]`) | `motion.ts:116-220` | Loop: cursores animados y cards movidas con `Flip`; se pausa fuera de pantalla (`onToggle`) | Igual (escalado vía `fitHero`) | Igual |
| Reveals (`[data-reveal]`) | `motion.ts:222-229` | `ScrollTrigger.batch`, `start: 'top 89%'`, `once`, opacity/y 1.2s stagger 0.09 | Igual | Igual |
| Spotlight (`.spot`) y magnetic (`[data-magnetic]`) | `motion.ts:231-251` | Variables `--mx/--my` y `quickTo` x/y elástico | Desactivado | Activo |
| Showcase (`[data-showcase]`) | `motion.ts:254-311` | `mm.add('(min-width: 1024px)')`: **pin** `center center` durante `3 × innerHeight`, el progreso cambia de paso | Sin pin: tabs con click (`mm.add('(max-width: 1023px)')`) | Pin + click hace `scrollTo` al paso |
| Bento (`[data-bento]`) | `motion.ts:313-325` | Al entrar (`top 82%`, `once`) agrega `.in` (dispara keyframes CSS) y cuenta `[data-count-to]` | Igual | Igual |
| Timer (`[data-timer]`) | `motion.ts:327-336` | `setInterval` de 1s | Igual | Igual |
| Flow (`[data-flow-steps]`) | `motion.ts:338-351` | `scrub: 0.4` llena el riel (`--p`) y activa pasos | Riel vertical (`max-width: 899px`) | Riel horizontal |
| CTA (`[data-cta]`) | `motion.ts:353-369` | Las 3 hojas del logo entran (1.5s) y quedan flotando en loop | Igual | Igual |
| Marquee, blobs del hero | `Marquee.astro`, `Hero.astro` | Keyframes CSS (`marquee`, `drift`, `float-a`) | Igual | Igual |

## Al agregar una animación

1. Engancharla con un `data-*` y declarar el estado inicial en CSS bajo `.js-motion` (así no hay flash si el JS tarda).
2. Si cambia entre móvil y desktop, usar `gsap.matchMedia()` y devolver la función de limpieza.
3. Animar transform/opacity. Nada de `100vh`: usar `innerHeight` en JS o `svh`/`dvh` en CSS.
4. Resolver el caso reduced motion (estado final estático en el bloque `if (reduced)`).
5. Si hay pin o cambia la altura del layout después de cargar contenido, llamar `ScrollTrigger.refresh()`.
6. Correr `pnpm test:e2e` (incluye `animations.spec.ts`) y probar en dispositivo real (ver `docs/testing.md`).
