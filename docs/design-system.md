# Design system

Tailwind **v4** configurado desde CSS: tokens en `@theme` de `src/styles/global.css`. **No existe `tailwind.config.*`**.
Tema único **oscuro** (`color-scheme: dark`, `theme-color #0b0b0e`); no hay modo claro.

## Breakpoints

Los de Tailwind por defecto (no se sobrescriben en `@theme`). Prefijos `xl:` y `2xl:` **no se usan**.

| Breakpoint | Valor | Qué cambia |
|---|---|---|
| (custom) `max-[359px]` | ≤ 359px | CTA del nav oculto (pasa al menú móvil) — `Nav.astro` |
| `max-sm` | < 640px | Nav más compacto (gutter 12px, padding del CTA) — `Nav.astro` |
| `sm` | 640px | Nav muestra idioma e "Ingresar"; CTAs del hero/CTA en fila; más padding superior en heros |
| `md` | 768px | Bento a 6 columnas, footer a 5 columnas, grillas de vistas internas |
| `lg` | 1024px | Nav desktop con dropdowns (debajo: menú móvil); Showcase en 2 columnas con **pin**; Details en 2 columnas con sticky; hojas del hero con parallax |

Media queries propias en componentes:

| Query | Archivo | Efecto |
|---|---|---|
| `max-width: 1023px` | `Showcase.astro`, `motion.ts` | Showcase en modo tabs (sin pin) |
| `max-width: 899px` | `HeroBoard.astro`, `Flow.astro`, `motion.ts` | Board del hero sin sidebar (`--w: 760px`); Flow vertical |
| `max-width: 640px` | `Showcase.astro` | Vistas del Showcase simplificadas (columnas y datos ocultos) |
| `max-width: 560px` | `Details.astro` | Grilla de Details a 1 columna |
| `hover: hover` | `global.css`, `Details`, `Showcase`, `Faq` | Estilos `:hover` solo con puntero |

## Color

| Token | Valor | Uso |
|---|---|---|
| `--color-ink` | `#08080a` | Texto sobre fondos claros (check de lista) |
| `--color-base` | `#0b0b0e` | Fondo de página |
| `--color-surface` | `#111114` | Superficies (marquee) |
| `--color-card` | `#16161a` | Cards, nodos del Flow |
| `--color-raise` | `#1c1c22` | Elementos elevados (íconos del Showcase) |
| `--color-line` | `rgba(255,255,255,.075)` | Bordes y divisores |
| `--color-line-strong` | `rgba(255,255,255,.14)` | Bordes de botones ghost, paneles |
| `--color-fg` | `#f4f3f8` | Texto principal |
| `--color-fg-2` | `#a3a2b3` | Texto secundario, `.lead` |
| `--color-fg-3` | `#6b6a7d` | Texto terciario, metadatos |
| `--color-accent` | `#6e5cf5` | Acento principal (CTA, foco) |
| `--color-accent-2` | `#9b8bff` | Eyebrows, íconos, gradientes |
| `--color-accent-3` | `#c4baff` | Íconos sobre fondo de acento, links de prosa |
| `--color-ok` | `#34d399` | Estado OK / done |
| `--color-warn` | `#fbbf24` | Prioridad / review |
| `--color-info` | `#38bdf8` | En progreso |
| `--color-danger` | `#f87171` | Marcador "hoy", prioridad alta |

Gradientes de texto: `.grad-text` (blanco → 55% alfa, vertical) y `.grad-accent` (`#c4baff → #8b7bff → #6e5cf5`).

## Tipografía

- Familias: `--font-sans: 'Geist Variable'` y `--font-mono: 'Geist Mono Variable'` (`@fontsource-variable`, `font-display: swap`).
- `font-feature-settings: 'ss01', 'cv11'` en `body`. Pesos usados: 500, 550, 600, 700.
- Escala fluida:

| Clase / uso | Tamaño | Otros |
|---|---|---|
| `.h-display` (h1 home) | `clamp(2.9rem, 8.2vw, 6.6rem)` | 600, `line-height .98`, `letter-spacing -0.045em` |
| h1 de `InnerHero` | `clamp(2.4rem, 6.2vw, 5rem)` | inline sobre `.h-display` |
| h2 del CTA final | `clamp(2.6rem, 7vw, 5.4rem)` | inline |
| `.h-section` | `clamp(2.1rem, 4.8vw, 3.9rem)` | 600, `line-height 1.04`, `-0.04em`, `text-wrap: balance` |
| h2 de FAQ | `clamp(1.8rem, 3.6vw, 2.8rem)` | inline |
| h3 de Bento | `clamp(1.2rem, 1.7vw, 1.5rem)` | 600, `-0.03em` |
| `.lead` | `clamp(1.05rem, 1.5vw, 1.25rem)` | `line-height 1.6`, `fg-2`, `text-wrap: pretty` |
| `.prose-fb` (blog, legal) | `1.05rem` | `line-height 1.8` (`src/styles/prose.css`) |
| `.eyebrow` | `.72rem` mono | uppercase, `letter-spacing .14em`, `accent-2`, línea degradada antes |

## Espaciado y layout

| Token / clase | Valor |
|---|---|
| `--gutter` | `clamp(1.25rem, 4vw, 2.5rem)` (padding lateral) |
| `--section-y` | `clamp(5rem, 9vw, 8rem)` (padding vertical de `.section`) |
| `.wrap` | `max-width: 1200px` |
| `.wrap-wide` | `max-width: 1360px` |
| Nav | `max-width: 1120px`, alto `3.5rem` (`h-14`) |

No hay escala de spacing propia: se usa la de Tailwind.

## Radios

| Elemento | Radio |
|---|---|
| Botones, pills, badges | `999px` |
| Bloque CTA final / `CtaBand` | `2.2rem` / `2rem` |
| Grilla de Details | `28px` |
| Cards del Bento (`.bcard`) | `26px` |
| FAQ | `24px` |
| Ventana del Showcase, paneles del nav | `20px` |
| Mock de la app (hero) | `18px` |
| Cajas de íconos | `10-12px` |

## Sombras y superficies

- `.btn-primary`: gradiente `#8371ff → #6e5cf5 → #5b48e6` + inset highlight + glow `0 10px 30px -8px rgba(110,92,245,.7)`; brillo que barre en hover.
- `.btn-ghost`: `rgba(255,255,255,.04)` + borde inset `line-strong` + `backdrop-filter: blur(10px)`.
- `.glass`: gradiente blanco 5.5% → 2% + borde inset + `blur(18px)`.
- `.cta`: radial violeta oscuro + borde inset violeta + `0 60px 140px -40px rgba(110,92,245,.45)`.
- Texturas: `.hairline-grid` (grilla de 64px), `.noise` (ruido SVG en overlay), blobs con `blur(110-130px)`.
- Easings: `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`, `--ease-soft: cubic-bezier(0.22, 1, 0.36, 1)`.

## Estilo visual

Premium, oscuro y minimalista: el producto se muestra "vivo" en mocks animados (board del hero, Showcase, Bento).

1. **Oscuro con un solo acento**: neutros fríos y violeta `#6e5cf5`; el color de estado (ok/warn/info/danger) solo dentro de mocks del producto.
2. **Profundidad sutil**: bordes de 1px con alfa, glows violetas y blur, nunca sombras duras ni bordes opacos.
3. **Tipografía protagonista**: titulares grandes, tracking negativo, gradiente de texto; texto secundario en `fg-2`.
4. **Movimiento con intención**: entradas `expo.out`, reveals al scrollear, demos que se mueven solas; siempre con alternativa para reduced motion.
5. **Mobile-first sin perder densidad**: los mocks se escalan (no se reemplazan) y los efectos de puntero se apagan en touch.

## Patrones de componentes

- **Botones**: `.btn` + `.btn-primary` | `.btn-ghost`, tamaños `.btn-sm` (2.4rem), base (3rem), `.btn-lg` (3.6rem). Flecha `svg.arrow` que se desplaza en hover. `data-magnetic` para el efecto magnético.
- **Secciones**: `<section class="section">` + `.wrap`; cabecera con `.eyebrow` → `h2.h-section.grad-text` → `p.lead`, todo con `data-reveal`.
- **Cards**: `.bcard` (Bento) y `.det` (Details), con `.spot` para el spotlight que sigue al puntero.
- **Hero interno**: `InnerHero.astro` (breadcrumbs, ícono, eyebrow, h1, lead, slot de CTAs, todo `data-hero-in`).
- **Navbar**: `Nav.astro`, pill fija que se vuelve "glass" al scrollear (`#nav.is-stuck`); dropdowns por hover/focus desde `lg`, menú a pantalla completa debajo.
- **Cierre de página**: `CTA.astro` (home) o `CtaBand.astro` (vistas internas); `Faq.astro` con `<details>` y JSON-LD.
- **Íconos**: `Icon.astro` con SVG de `lucide-static`; `scripts/sync-icons.mjs` copia a `src/icons` solo los usados.
