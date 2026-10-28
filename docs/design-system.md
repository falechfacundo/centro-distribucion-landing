# Sistema de diseño — Centro Distribución

## Identidad

- **Nombre:** Centro Distribución.
- **Atributos:** claridad operativa, trazabilidad, precisión y coordinación entre ubicaciones.
- **Símbolo:** tres niveles horizontales que evocan una estantería y una estructura organizada.
- **Paleta:** grafito verde para texto, fondos claros de papel, verde petróleo para acción y menta para destacar información.
- **Tipografía:** Geist Variable y Geist Mono Variable, conservadas de la base.

La composición principal ya usa un hero editorial, navegación a todo el ancho, capacidades en grilla abierta y un cierre de contacto dividido. La ficha de inventario tiene tratamiento de muestra ilustrativa y conserva un marco oscuro para sugerir una interfaz operativa.

## Color

| Token | Valor | Uso |
|---|---|---|
| `--color-ink` | `#f8faf7` | Texto sobre controles oscuros |
| `--color-base` | `#f2f5f1` | Fondo principal |
| `--color-surface` | `#e8eee9` | Superficies de sección |
| `--color-card` | `#ffffff` | Tarjetas |
| `--color-raise` | `#dce8e0` | Elementos elevados |
| `--color-fg` | `#18342c` | Texto principal |
| `--color-fg-2` | `#4d655b` | Texto secundario |
| `--color-fg-3` | `#63776e` | Metadatos |
| `--color-accent` | `#087866` | Acciones y foco |
| `--color-accent-2` | `#16735f` | Eyebrows, iconos y acento |
| `--color-accent-3` | `#0d5e4b` | Enlaces y acento oscuro |
| `--color-ok` | `#188052` | Estado correcto |
| `--color-warn` | `#a65c11` | Atención y revisión |
| `--color-info` | `#17649a` | Información y progreso |
| `--color-danger` | `#ad403b` | Error y urgencia |

Los tokens se definen en `src/styles/global.css`. Las tarjetas funcionales dentro de mockups pueden usar fondos oscuros para conservar su aspecto de interfaz de producto.

## Tipografía y layout actual

- `--font-sans`: Geist Variable.
- `--font-mono`: Geist Mono Variable.
- Gutter: `clamp(1.25rem, 4vw, 2.5rem)`.
- Separación vertical de sección: `clamp(5rem, 9vw, 8rem)`.
- Contenedor estándar: 1200px; ancho extendido: 1360px.
- Breakpoints: valores por defecto de Tailwind v4.

El rediseño debe mantener contraste accesible y soporte para reduced motion. Las próximas pasadas pueden ajustar ritmo, proporciones y responsive al revisar la página renderizada.

## Activos y estilos

- Logo: `src/components/Logo.astro`.
- Favicon e iconos: `public/favicon.svg`, `public/mark.svg`, `public/apple-touch-icon.png`.
- Imagen social: `public/og.png`.
- Tokens y primitivas globales: `src/styles/global.css`.
