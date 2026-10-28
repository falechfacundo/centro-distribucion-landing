# Centro Distribución · Landing

Landing estática de Centro Distribución en español e inglés, construida con **Astro 7 + Tailwind v4 + GSAP + Lenis**. Conserva la estructura técnica y el i18n existentes; el contenido se adaptó y la identidad visual y composición principal ya tienen una primera pasada propia.

## Comandos

| Comando | Acción |
|---|---|
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Dev server en `http://localhost:4321` |
| `pnpm build` | Build estático a `dist/` |
| `pnpm preview` | Sirve el build |
| `pnpm check` | Type-check de Astro/TS |
| `pnpm icons` | Sincroniza iconos lucide usados |
| `pnpm test:e2e` | Playwright contra el build (ver `docs/testing.md`) |

## Configuración

Antes de publicar, definir los dominios y contactos finales mediante `PUBLIC_SITE_URL`, `PUBLIC_APP_URL` y `PUBLIC_CONTACT_EMAIL`. Esta carpeta aún conserva metadata de vinculación del proyecto Vercel anterior; no desplegar hasta reemplazarla.

## Estructura y documentación

- `src/i18n/`: registro de rutas y copy ES/EN.
- `src/views/`, `src/components/`: vistas y componentes de la landing.
- `src/content/blog/`: artículos Markdown traducidos.
- `src/styles/global.css`: tokens de identidad y estilos globales.
- `docs/project-context.md`: estado y orden acordado.
- `docs/design-system.md`: identidad visual aplicada.
- `docs/animations.md`, `docs/testing.md`: guías técnicas conservadas.

La referencia funcional está en `Enterprise Supply Chain & Distribution OS.md`, en el repositorio padre.
