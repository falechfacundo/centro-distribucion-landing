# Contexto del proyecto

## Producto

**FlowBoard** es un software de gestión de proyectos: tableros Kanban, sprints, timeline, OKRs, time tracking,
integración con Git y tickets generados con IA. Este repo es **solo la landing de marketing**. El producto vive en otro
repo (`kanban-nextjs`) y se deploya en `PUBLIC_APP_URL`.

- **Público**: equipos que organizan proyectos y trabajo ("une proyectos, equipos y progreso en un solo lugar",
  `src/i18n/home.ts`). No hay más segmentación definida en el código.
- **Modelo**: plan Gratis ($0) y plan Equipos "Próximamente". El producto todavía **no cobra** (README).
- **Idiomas**: español (default, sin prefijo: `/`) e inglés (`/en/`).

## Páginas

Registro de rutas en `src/i18n/routes.ts` (clave → ruta por idioma). 41 páginas en el build:

| Tipo | Rutas ES (EN equivalente bajo `/en/`) | Vista |
|---|---|---|
| Home | `/` | `src/views/Home.astro`: Hero, Marquee, Showcase, Bento, Flow, Details, CTA |
| Funciones (7) | `/funciones/{tablero-kanban,sprints,timeline,okrs,time-tracking,integracion-git,tickets-con-ia}/` | `FeaturePage.astro` |
| Precios | `/precios/` | `PricingPage.astro` |
| Comparativas (4) | `/comparar/{jira,clickup,linear,trello}/` | `ComparePage.astro` |
| Legal (2) | `/legal/{terminos,privacidad}/` | `LegalPage.astro` |
| Contacto | `/contacto/` | `ContactPage.astro` (muestra un `mailto:`, sin formulario) |
| Changelog | `/novedades/` | `ChangelogPage.astro` |
| Blog | `/blog/` y `/blog/<slug>/` | `BlogIndex.astro`, `BlogPost.astro` |
| 404 | `/404.html` | `noindex` |

Las páginas del registro se generan desde `src/pages/[...slug].astro`; home y blog tienen rutas propias.

## Integraciones

| Integración | Estado |
|---|---|
| Analytics | No definido |
| Formularios | No definido (contacto por `mailto:`) |
| CMS | No definido. El blog usa Content Collections de Astro: Markdown en `src/content/blog/{es,en}/`, unidos por `translationKey` |
| SEO | `@astrojs/sitemap` (con alternates i18n), `robots.txt` generado (`src/pages/robots.txt.ts`), JSON-LD (`JsonLd.astro`) |
| Hosting | Vercel (proyecto linkeado en `.vercel/`); cualquier host estático sirve |

## Variables de entorno

Todas opcionales: si faltan, se usa el default de `src/config.ts` / `astro.config.mjs`.

| Variable | Uso |
|---|---|
| `PUBLIC_SITE_URL` | Dominio de la landing (canonical, sitemap, OG) |
| `PUBLIC_APP_URL` | URL del producto; los CTA van a `/register` y `/login` |
| `PUBLIC_CONTACT_EMAIL` | Email mostrado en `/contacto` |

`.env.local` lo genera el CLI de Vercel (`VERCEL_OIDC_TOKEN`); no lo usa el build.

## Decisiones técnicas

| Decisión | Por qué |
|---|---|
| Astro estático (`build.format: 'directory'`, `trailingSlash: 'always'`) | Landing de contenido: HTML puro, sin servidor, URLs canónicas consistentes |
| i18n con registro propio de rutas (`routes.ts`) en vez de duplicar páginas | Slugs traducidos por idioma (`/precios/` ↔ `/en/pricing/`) y hreflang automático |
| Tailwind v4 configurado en CSS (`@theme`) | Tokens del design system junto a los estilos globales; sin archivo de config |
| Un único `motion.ts` global (GSAP + Lenis) | Sitio multipágina sin islands interactivas; una sola inicialización por carga |
| Lenis solo para rueda, touch nativo | Evita conflictos con el scroll del sistema en móvil |
| Clase `js-motion` puesta en `<head>` + fallback de 4s | Ocultar estados iniciales sin flash, sin dejar la página en blanco si el JS falla |
| `scripts/sync-icons.mjs` | Copia solo los íconos de lucide que se usan (evita procesar ~2000 SVG) |
| pnpm | Gestor del repo (`packageManager: pnpm@12.4.2`) |
| Playwright contra el build (`build && preview`), nunca el dev server | Probar lo mismo que se deploya |

## Pendientes conocidos

- Sin dominio propio (default `https://flowboard-landing.vercel.app`).
- Textos legales: documento base, falta revisión legal.
- Deuda de UI registrada en los tests (`test.fail`): ver `docs/testing.md` → "Deuda conocida".
