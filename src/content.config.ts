import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    minutes: z.number(),
    lang: z.enum(['es', 'en']),
    /** Une la versión ES y EN del mismo artículo (para hreflang). */
    translationKey: z.string(),
    tag: z.string(),
  }),
});

export const collections = { blog };
