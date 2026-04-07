import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blogEntries = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "src/content/blogEntries/",
  }),
  schema: z.object({
    title: z.string(),
    preview_description: z.string(),
    sections: z
      .object({
        title: z.string(),
        text: z.string(),
        footer: z.string().optional(),
      })
      .array(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "src/content/projects/",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    links: z.object({
      repository: z.string().url().optional(),
      live: z.string().url().optional(),
    }),
    technologies: z.array(reference("technologies")).optional(),
    color: z.string().optional().default("#fafafa"),
  }),
});

export const techScopeEnum = z.enum([
  "frontend",
  "backend",
  "database",
  "other",
]);

const technologies = defineCollection({
  loader: glob({
    pattern: "**/**/*.json",
    base: "src/content/technologies/",
  }),
  schema: z.object({
    scope: techScopeEnum,
    name: z.string(),
    description: z.string(),
    opinion: z.string().optional(),
    rate: z.number().multipleOf(0.5).min(0).max(10).default(5),
    logo: z.string().optional(),
    ecosystem: z.string(),
    ecosystem_logo: z.string().optional(),
  }),
});

export const collections = {
  projects,
  technologies,
  blogEntries,
};
