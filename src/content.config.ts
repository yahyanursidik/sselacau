import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const unit = z.enum(['tk', 'kuttab', 'madrasah']);

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      unit: z.union([unit, z.literal('umum')]),
      kind: z.enum(['berita', 'pengumuman']).default('berita'),
      excerpt: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      published: z.boolean().default(false),
    }),
});

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      unit,
      description: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      published: z.boolean().default(false),
    }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    unit: z.union([unit, z.literal('umum')]),
    order: z.number().default(0),
    published: z.boolean().default(false),
  }),
});

export const collections = { news, activities, faqs };
