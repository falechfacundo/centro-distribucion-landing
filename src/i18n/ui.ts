import type { Lang, FeatureKey } from './routes';

export const featureNav: Record<FeatureKey, { icon: string; es: [string, string]; en: [string, string] }> = {
  'feat-board': { icon: 'square-kanban', es: ['Tablero Kanban', 'Arrastrá y organizá el trabajo'], en: ['Kanban board', 'Drag and organize your work'] },
  'feat-sprints': { icon: 'rocket', es: ['Sprints', 'Planificá, iniciá y cerrá'], en: ['Sprints', 'Plan, start and close'] },
  'feat-timeline': { icon: 'chart-gantt', es: ['Timeline', 'El trabajo en el tiempo'], en: ['Timeline', 'Work across time'] },
  'feat-okrs': { icon: 'target', es: ['OKRs', 'Objetivos con resultados clave'], en: ['OKRs', 'Goals with key results'] },
  'feat-time': { icon: 'timer', es: ['Time tracking', 'Medí el tiempo por tarea'], en: ['Time tracking', 'Track time per task'] },
  'feat-git': { icon: 'git-branch', es: ['Integración Git', 'Commits vinculados a tareas'], en: ['Git integration', 'Commits linked to tasks'] },
  'feat-ai': { icon: 'sparkles', es: ['Tickets con IA', 'De una idea a un backlog'], en: ['AI tickets', 'From an idea to a backlog'] },
};

export const ui = {
  es: {
    nav: { product: 'Producto', pricing: 'Precios', compare: 'Comparar', blog: 'Blog', changelog: 'Novedades', login: 'Ingresar', cta: 'Empezar gratis', menu: 'Menú', close: 'Cerrar', allFeatures: 'Ver todas las funciones', home: 'FlowBoard — inicio' },
    footer: {
      tagline: 'Turn complex work into a clear flow.',
      cols: { product: 'Producto', compare: 'Comparar', company: 'Empresa', legal: 'Legal' },
      contact: 'Contacto', terms: 'Términos', privacy: 'Privacidad', signup: 'Crear cuenta', login: 'Ingresar',
      vs: (n: string) => `FlowBoard vs ${n}`, rights: 'Todos los derechos reservados.', lang: 'English',
    },
    common: { learnMore: 'Conocer más', startFree: 'Empezar gratis', createAccount: 'Crear cuenta gratis', haveAccount: 'Ya tengo cuenta', faq: 'Preguntas frecuentes', related: 'Seguí explorando', readMore: 'Leer artículo', minutes: 'min de lectura', back: 'Volver', breadcrumbHome: 'Inicio', notFoundTitle: 'Esta página no existe', notFoundText: 'El enlace que seguiste no lleva a ningún lado. Volvamos al flujo.', goHome: 'Ir al inicio', updated: 'Última actualización', published: 'Publicado' },
  },
  en: {
    nav: { product: 'Product', pricing: 'Pricing', compare: 'Compare', blog: 'Blog', changelog: 'Changelog', login: 'Log in', cta: 'Get started free', menu: 'Menu', close: 'Close', allFeatures: 'See all features', home: 'FlowBoard — home' },
    footer: {
      tagline: 'Turn complex work into a clear flow.',
      cols: { product: 'Product', compare: 'Compare', company: 'Company', legal: 'Legal' },
      contact: 'Contact', terms: 'Terms', privacy: 'Privacy', signup: 'Sign up', login: 'Log in',
      vs: (n: string) => `FlowBoard vs ${n}`, rights: 'All rights reserved.', lang: 'Español',
    },
    common: { learnMore: 'Learn more', startFree: 'Get started free', createAccount: 'Create a free account', haveAccount: 'I already have an account', faq: 'Frequently asked questions', related: 'Keep exploring', readMore: 'Read article', minutes: 'min read', back: 'Back', breadcrumbHome: 'Home', notFoundTitle: "This page doesn't exist", notFoundText: "The link you followed doesn't lead anywhere. Let's get back to the flow.", goHome: 'Go home', updated: 'Last updated', published: 'Published' },
  },
} satisfies Record<Lang, unknown>;

export const competitors = { jira: 'Jira', clickup: 'ClickUp', linear: 'Linear', trello: 'Trello' } as const;
