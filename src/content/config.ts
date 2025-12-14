import { defineCollection } from 'astro:content';

// Blog collection - basic frontmatter fields
export const blog = defineCollection({
  // no schema to keep it flexible; expected frontmatter:
  // title, description, date, tags: string[]
});

export const collections = {
  blog,
};
