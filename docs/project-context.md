# Contexto del proyecto

## Producto

**Centro Distribución** es una plataforma SaaS B2B para administrar operaciones de almacenamiento, distribución, abastecimiento y comercialización. La referencia funcional está en el repositorio padre: `Enterprise Supply Chain & Distribution OS.md`; el alcance técnico resumido está en `docs/architecture.md` del repositorio padre.

La visión cubre catálogo, inventario trazable, compras y proveedores, WMS, TMS, sucursales, planificación, automatización, analítica y operación multiempresa. El monorepo aclara que las pantallas operativas se habilitan a medida que los módulos quedan listos; por eso el marketing diferencia capacidades implementadas, arquitectura prevista y roadmap.

## Estado de esta landing

Se reutilizó la base Astro heredada para conservar dependencias, estructura multipágina e i18n. El contenido ES/EN ahora habla de Centro Distribución y de sus capacidades logísticas. Las rutas de producto apuntan a catálogo, inventario, depósitos, proveedores, trazabilidad, recepción y organizaciones. Los ejemplos de interfaz están marcados como ilustrativos.

La identidad visual usa fondos claros, texto grafito verdoso, verde petróleo y acentos menta, con una marca geométrica de tres niveles inspirada en estanterías. La composición principal ya fue rediseñada para dar a la landing una jerarquía editorial propia; quedan pendientes la revisión visual y los datos comerciales definitivos.

- Español por defecto en `/`; inglés en `/en/`.
- Rutas localizadas en `src/i18n/routes.ts`.
- Copy por idioma en `src/i18n/`; blog en `src/content/blog/{es,en}/`.
- El contacto, los planes, la política legal y la disponibilidad comercial requieren datos definitivos del equipo.

## Arquitectura conservada

| Área | Implementación |
|---|---|
| Framework | Astro estático con Tailwind CSS v4 |
| Animación | GSAP (ScrollTrigger, Flip) y Lenis en `src/scripts/motion.ts` |
| i18n | Registro propio de rutas ES/EN y contenido localizado |
| Blog | Markdown con Content Collections y `translationKey` |
| SEO | Sitemap con alternates, robots.txt y JSON-LD |
| Iconos | `scripts/sync-icons.mjs` copia los SVG usados |
| Gestor de paquetes | pnpm |

## Pendientes para publicar

- Confirmar capacidades disponibles y estado comercial por módulo.
- Definir titular legal, domicilio y canal de contacto; reemplazar los textos legales preliminares.
- Configurar `PUBLIC_SITE_URL`, `PUBLIC_APP_URL` y `PUBLIC_CONTACT_EMAIL`.
- Crear un remote nuevo de GitHub y reemplazar el vínculo heredado de Vercel por el proyecto correcto.
- Revisar rutas nuevas y configurar redirecciones para URLs heredadas si corresponden.

## Orden acordado

1. Adaptar contenido y metadatos al producto. **Completado.**
2. Definir y aplicar identidad de marca. **Aplicada como dirección inicial; pendiente confirmar si el equipo tiene una guía existente.**
3. Rediseñar la estructura visual de la landing. **Aplicada en hero, navegación, capacidades, recorrido de producto y CTA; falta revisión visual integral.**
4. Preparar GitHub y Vercel con los datos de dominio, acceso y publicación confirmados. **Pendiente.**
