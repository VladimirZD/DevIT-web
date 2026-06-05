import { defineCollection, z } from 'astro:content';

export const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    date: z.coerce.date(),
    tags: z.array(z.string().min(1)).default([]),
  }),
});

export const collections = {
  blog,
};
