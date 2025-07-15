import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    react(),
  ],
  // Enable static site generation for performance
  output: 'static',
  // Optimize build for production
  build: {
    inlineStylesheets: 'auto',
  },
  // Site configuration for deployment
  site: 'https://maxlinebulldogs.com',
  base: '/',
}); 