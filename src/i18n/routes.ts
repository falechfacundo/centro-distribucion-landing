export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';
export const ogLocale: Record<Lang, string> = { es: 'es_AR', en: 'en_US' };

// Cada clave tiene su ruta por idioma (sin barras inicial/final).
export const routes = {
  home: { es: '', en: '' },
  'feat-board': { es: 'funciones/tablero-kanban', en: 'features/kanban-board' },
  'feat-sprints': { es: 'funciones/sprints', en: 'features/sprints' },
  'feat-timeline': { es: 'funciones/timeline', en: 'features/timeline' },
  'feat-okrs': { es: 'funciones/okrs', en: 'features/okrs' },
  'feat-time': { es: 'funciones/time-tracking', en: 'features/time-tracking' },
  'feat-git': { es: 'funciones/integracion-git', en: 'features/git-integration' },
  'feat-ai': { es: 'funciones/tickets-con-ia', en: 'features/ai-tickets' },
  pricing: { es: 'precios', en: 'pricing' },
  'cmp-jira': { es: 'comparar/jira', en: 'compare/jira' },
  'cmp-clickup': { es: 'comparar/clickup', en: 'compare/clickup' },
  'cmp-linear': { es: 'comparar/linear', en: 'compare/linear' },
  'cmp-trello': { es: 'comparar/trello', en: 'compare/trello' },
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
