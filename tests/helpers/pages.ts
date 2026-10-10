import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { routes, locales, url, blogUrl, type RouteKey } from '../../src/i18n/routes';

export type Page = { name: string; path: string };

// Playwright lista los tests antes de levantar el servidor, así que las rutas salen del código
// (mismo registro que usa src/pages/[...slug].astro) y no del sitemap del build.
const staticPages: Page[] = (Object.keys(routes) as RouteKey[]).flatMap((key) =>
  locales.map((lang) => ({ name: `${lang}:${key}`, path: url(key, lang) })),
);

const blogDir = join(process.cwd(), 'src/content/blog');
const posts: Page[] = locales.flatMap((lang) =>
  readdirSync(join(blogDir, lang))
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
    .map((slug) => ({ name: `${lang}:post:${slug}`, path: blogUrl(slug, lang) })),
);

/** Todas las páginas indexables (sin la 404). */
export const allPages: Page[] = [...staticPages, ...posts];

/** Subconjunto representativo (una por tipo de vista) para capturas y Lighthouse. */
export const keyPages: Page[] = [
  'es:home', 'en:home', 'es:feat-board', 'es:pricing', 'es:cmp-jira', 'es:blog', 'es:contact', 'es:changelog',
].map((name) => allPages.find((p) => p.name === name)!).concat(posts[0]);
