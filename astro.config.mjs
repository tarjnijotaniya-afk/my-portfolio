// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://tarjnijotaniya.com',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Rubik',
      cssVariable: '--font-rubik',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
