// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        // srcを@として設定
        '@': path.resolve('./src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          // mixinなどをpage全体で使いたいとき
          // additionalData: `@use "src/styles/style.scss";`
        }
      }
    }
  },
});