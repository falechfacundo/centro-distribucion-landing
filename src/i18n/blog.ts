import { getCollection, type CollectionEntry } from 'astro:content';
import { blogUrl, type Lang } from './routes';

export type Post = CollectionEntry<'blog'>;
export const slugOf = (p: Post) => p.id.split('/').pop()!.replace(/\.md$/, '');

export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', (p) => p.data.lang === lang);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Rutas equivalentes de un post en cada idioma (para hreflang y el selector de idioma). */
export async function postAlternates(post: Post): Promise<Partial<Record<Lang, string>>> {
  const all = await getCollection('blog', (p) => p.data.translationKey === post.data.translationKey);
  const out: Partial<Record<Lang, string>> = {};
  for (const p of all) out[p.data.lang] = blogUrl(slugOf(p), p.data.lang);
  return out;
}
