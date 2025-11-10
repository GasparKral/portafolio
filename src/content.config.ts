import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({
        pattern: '*.json',
        base: 'src/content/projects/',
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        repo_link: z.string().url().optional(),
        live_link: z.string().url().optional(),
        technologies: z.array(reference('technologies')).optional(),
    }),
});

const technologies = defineCollection({
    loader: glob({
        pattern: '(es|en)/**/*.json',
        base: 'src/content/technologies/',
    }),
    schema: z.object({
        scope: z.enum(['frontend', 'backend', 'database', 'other']),
        name: z.string(),
        opinion: z.string(),
        rate: z.number().min(1).max(5).default(5),
        logo: z.string().optional(),
        ecosystem: z.string(),
        ecosystem_logo: z.string().optional(),
    }),
});

export const collections = {
    projects,
    technologies,
};
