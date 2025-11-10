// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({

	site: 'https://io.github.com/gasparkral/portfolio',
	output: 'static',

    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [react()],

    i18n: {
        locales: ['es', 'en'],
        defaultLocale: 'es',
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
