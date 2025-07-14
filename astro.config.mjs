import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
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
  // Add Tina CMS support
  vite: {
    define: {
      'process.env.TINA_PUBLIC_IS_LOCAL': JSON.stringify(process.env.TINA_PUBLIC_IS_LOCAL || 'false'),
    },
  },
}); 