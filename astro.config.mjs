// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://bwever.github.io',
  base: '/tomlify',
  integrations: [react()]
});