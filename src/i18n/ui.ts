import type { CompareKey, FeatureKey, Lang } from './routes';

export const featureNav: Record<FeatureKey, { icon: string; es: [string, string]; en: [string, string] }> = {
  'feat-board': { icon: 'folder', es: ['Catálogo de productos', 'Identificación y datos de producto'], en: ['Product catalog', 'Product identification and data'] },
  'feat-sprints': { icon: 'layers', es: ['Inventario', 'Existencias y movimientos'], en: ['Inventory', 'Stock and movements'] },
  'feat-timeline': { icon: 'home', es: ['Depósitos', 'Zonas y ubicaciones'], en: ['Warehouses', 'Zones and locations'] },
  'feat-okrs': { icon: 'arrow-right', es: ['Proveedores', 'Abastecimiento conectado'], en: ['Suppliers', 'Connected procurement'] },
  'feat-time': { icon: 'filter', es: ['Lotes y trazabilidad', 'Seguimiento de inventario'], en: ['Lots and traceability', 'Inventory tracking'] },
  'feat-git': { icon: 'check-check', es: ['Recepción y guardado', 'Ingreso y putaway'], en: ['Receiving and putaway', 'Inbound and storage'] },
  'feat-ai': { icon: 'briefcase', es: ['Organizaciones y permisos', 'Estructura multiempresa'], en: ['Organizations and permissions', 'Multi-company structure'] },
};

export const solutionNav: Record<CompareKey, { icon: string; es: string; en: string }> = {
  'cmp-jira': { icon: 'layers', es: 'Distribución mayorista', en: 'Wholesale distribution' },
  'cmp-clickup': { icon: 'home', es: 'Retail multisucursal', en: 'Multi-location retail' },
  'cmp-linear': { icon: 'arrow-right', es: 'Operadores logísticos', en: 'Logistics operators' },
  'cmp-trello': { icon: 'check-check', es: 'Fulfillment ecommerce', en: 'Ecommerce fulfillment' },
};

export const ui = {
  es: {
    nav: { product: 'Plataforma', pricing: 'Planes', compare: 'Soluciones', blog: 'Recursos', changelog: 'Evolución', login: 'Acceso clientes', cta: 'Solicitar una demo', menu: 'Menú', close: 'Cerrar', allFeatures: 'Ver capacidades', home: 'Centro Distribución — inicio' },
    footer: {
      tagline: 'Visibilidad y control para cada movimiento.',
      cols: { product: 'Plataforma', compare: 'Soluciones', company: 'Empresa', legal: 'Información' },
      contact: 'Contacto', terms: 'Términos', privacy: 'Privacidad', signup: 'Solicitar una demo', login: 'Acceso clientes',
      vs: (n: string) => n, rights: 'Todos los derechos reservados.', lang: 'English',
    },
    common: { learnMore: 'Conocer más', startFree: 'Solicitar una demo', createAccount: 'Hablar con el equipo', haveAccount: 'Acceso clientes', faq: 'Preguntas frecuentes', related: 'Seguí explorando', readMore: 'Leer artículo', minutes: 'min de lectura', back: 'Volver', breadcrumbHome: 'Inicio', notFoundTitle: 'Esta página no existe', notFoundText: 'El enlace que seguiste no lleva a ningún lugar. Volvamos al inicio.', goHome: 'Ir al inicio', updated: 'Última actualización', published: 'Publicado' },
  },
  en: {
    nav: { product: 'Platform', pricing: 'Plans', compare: 'Solutions', blog: 'Resources', changelog: 'Product updates', login: 'Customer access', cta: 'Request a demo', menu: 'Menu', close: 'Close', allFeatures: 'Explore capabilities', home: 'Centro Distribución — home' },
    footer: {
      tagline: 'Visibility and control for every movement.',
      cols: { product: 'Platform', compare: 'Solutions', company: 'Company', legal: 'Information' },
      contact: 'Contact', terms: 'Terms', privacy: 'Privacy', signup: 'Request a demo', login: 'Customer access',
      vs: (n: string) => n, rights: 'All rights reserved.', lang: 'Español',
    },
    common: { learnMore: 'Learn more', startFree: 'Request a demo', createAccount: 'Talk to our team', haveAccount: 'Customer access', faq: 'Frequently asked questions', related: 'Explore more', readMore: 'Read article', minutes: 'min read', back: 'Back', breadcrumbHome: 'Home', notFoundTitle: "This page doesn't exist", notFoundText: "The link you followed doesn't lead anywhere. Let's go back to the home page.", goHome: 'Go home', updated: 'Last updated', published: 'Published' },
  },
} satisfies Record<Lang, unknown>;

