import { defineCollection, z } from 'astro:content';

// Enhanced Studs Collection
const studsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    image: z.string(), // Main/featured image
    images: z.array(z.union([z.string(), z.object({ url: z.string() })])).optional().default([]), // Gallery images
    body: z.string().optional(),
  }),
});

// Enhanced Litters Collection
const littersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    status: z.enum(['Available', 'Reserved', 'Coming Soon', 'Waitlist']),
    colors: z.array(z.string()),
    ready: z.string(),
    images: z.array(z.union([z.string(), z.object({ url: z.string() })])).optional().default([]),
    body: z.string().optional(),
  }),
});

// Enhanced Photos Collection
const photosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['studs', 'litters', 'general']),
    image: z.string(),
    alt: z.string(),
    body: z.string().optional(),
    photographer: z.string().optional(),
    dateTaken: z.string().optional(),
    location: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Export collections
export const collections = {
  studs: studsCollection,
  litters: littersCollection,
  photos: photosCollection,
}; 