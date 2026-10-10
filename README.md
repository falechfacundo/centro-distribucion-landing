# FlowBoard · Landing

Landing page de FlowBoard, construida con **Astro 7 + Tailwind v4 + GSAP (ScrollTrigger, Flip) + Lenis**.
Es un repo independiente del producto (`kanban-nextjs`).

## Estado

| | |
| --- | --- |
| Deploy | ❌ Sin dominio propio. Default de `PUBLIC_SITE_URL`: `https://flowboard-landing.vercel.app` |
| Producto | Sin billing: la página de precios describe planes que el producto todavía no cobra |

## Comandos

| Comando | Acción |
|---|---|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Dev server en `http://localhost:4321` |
| `pnpm build` | Build estático a `dist/` |
| `pnpm preview` | Sirve el build |
| `pnpm check` | Type-check de Astro/TS |
| `pnpm icons` | Copia a `src/icons` solo los íconos lucide usados |
| `pnpm test:e2e` | Playwright contra el build en 6 dispositivos (ver `docs/testing.md`) |
| `pnpm build && pnpm lighthouse` | Lighthouse CI mobile + desktop |

Documentación técnica en [`CLAUDE.md`](CLAUDE.md) y [`docs/`](docs/) (design system, animaciones, testing, contexto).

## Configuración

Variables (o defaults en `src/config.ts`):

| Variable | Uso |
|---|---|
| `PUBLIC_SITE_URL` | Dominio de esta landing (canonical, sitemap, OG). Default `https://flowboard-landing.vercel.app` |
| `PUBLIC_APP_URL` | URL del producto; los CTA apuntan a `/register` y `/login` |
| `PUBLIC_CONTACT_EMAIL` | Email mostrado en /contacto |

## Estructura

```
src/
  i18n/         routes.ts (rutas ES/EN), home.ts, features.ts, pages.ts (precios, comparativas, legal, changelog), ui.ts
  views/        Home, FeaturePage, PricingPage, ComparePage, LegalPage, ContactPage, ChangelogPage, BlogIndex, BlogPost
  pages/        index, en/index, [...slug] (páginas del registro de rutas), blog/, en/blog/, 404, robots.txt
  content/blog/ Artículos en Markdown (es/ y en/, unidos por translationKey)
  components/   Nav, Footer, Hero, HeroBoard, Showcase, Bento, Flow, Details, CTA, InnerHero, Faq, CtaBand, JsonLd...
  scripts/motion.ts   Animación (Lenis, GSAP, loop del tablero, reveals, pin)
scripts/sync-icons.mjs  Copia a src/icons solo los íconos lucide usados (corre en dev/build)
```

## SEO

- Español en `/` e inglés en `/en/`, con `hreflang` + `x-default`, canonical y `og:locale`.
- `sitemap-index.xml` (con alternates i18n) y `robots.txt` generados en build.
- JSON-LD: Organization, WebSite, SoftwareApplication, Product (precios), FAQPage, BreadcrumbList, BlogPosting.
- Una página por función, comparativas, precios, blog y changelog; 404 con `noindex`.

## Agregar contenido

- Nueva página estática: agregar la ruta en `src/i18n/routes.ts` y su contenido/vista.
- Nuevo artículo: crear `src/content/blog/es/<slug>.md` y `en/<slug>.md` con el mismo `translationKey`.
- Al usar un ícono nuevo de lucide, `pnpm icons` (dev/build ya lo hacen).

## Notas

- Respeta `prefers-reduced-motion`.
- Los textos legales son un documento base: revisarlos con asesoría legal antes de publicar.
- Deploy: cualquier host estático; en Vercel es zero-config (framework Astro).
