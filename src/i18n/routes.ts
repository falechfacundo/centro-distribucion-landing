export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';
export const ogLocale: Record<Lang, string> = { es: 'es_AR', en: 'en_US' };

// Cada clave tiene su ruta por idioma (sin barras inicial/final).
export const routes = {
  home: { es: '', en: '' },
  'feat-board': { es: 'plataforma/catalogo-productos', en: 'platform/product-catalog' },
  'feat-sprints': { es: 'plataforma/inventario', en: 'platform/inventory' },
  'feat-timeline': { es: 'plataforma/depositos-ubicaciones', en: 'platform/warehouses-locations' },
  'feat-okrs': { es: 'plataforma/proveedores-abastecimiento', en: 'platform/suppliers-procurement' },
  'feat-time': { es: 'plataforma/lotes-trazabilidad', en: 'platform/lots-traceability' },
  'feat-git': { es: 'plataforma/recepcion-guardado', en: 'platform/receiving-putaway' },
  'feat-ai': { es: 'plataforma/organizaciones-permisos', en: 'platform/organizations-permissions' },
  pricing: { es: 'precios', en: 'pricing' },
  'cmp-jira': { es: 'soluciones/distribucion-mayorista', en: 'solutions/wholesale-distribution' },
  'cmp-clickup': { es: 'soluciones/retail-multisucursal', en: 'solutions/multi-location-retail' },
  'cmp-linear': { es: 'soluciones/operadores-logisticos', en: 'solutions/logistics-operators' },
  'cmp-trello': { es: 'soluciones/fulfillment-ecommerce', en: 'solutions/ecommerce-fulfillment' },
  terms: { es: 'legal/terminos', en: 'legal/terms' },
  privacy: { es: 'legal/privacidad', en: 'legal/privacy' },
  contact: { es: 'contacto', en: 'contact' },
  blog: { es: 'blog', en: 'blog' },
  changelog: { es: 'novedades', en: 'changelog' },
} as const;

export type RouteKey = keyof typeof routes;

export function url(key: RouteKey, lang: Lang): string {
  const p = routes[key][lang];
  const base = lang === defaultLang ? '/' : `/${lang}/`;
  return p ? `${base}${p}/` : base;
}
export const blogUrl = (slug: string, lang: Lang) => `${url('blog', lang)}${slug}/`;

export const featureKeys = ['feat-board', 'feat-sprints', 'feat-timeline', 'feat-okrs', 'feat-time', 'feat-git', 'feat-ai'] as const;
export const compareKeys = ['cmp-jira', 'cmp-clickup', 'cmp-linear', 'cmp-trello'] as const;
export type FeatureKey = (typeof featureKeys)[number];
export type CompareKey = (typeof compareKeys)[number];

export function otherLang(lang: Lang): Lang { return lang === 'es' ? 'en' : 'es'; }

