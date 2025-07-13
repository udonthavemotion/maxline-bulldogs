/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_STRIPE_PUBLIC_KEY: string;
  // Add other env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 