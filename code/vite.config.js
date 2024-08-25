import path from 'path';
import { glob } from 'glob';
import legacy from '@vitejs/plugin-legacy';

/** @type {import('vite').UserConfig} */
export default {
  root: path.join(process.cwd(), 'src'),
  publicDir: '../public',
  build: {
    outDir: '../dist',
    cssMinify: true,
    rollupOptions: {
      input: glob.sync('./src/**/*.html'),
      output: {
        manualChunks: {
          alpinejs: ['alpinejs'],
          apexcharts: ['apexcharts'],
          faker: ['@faker-js/faker/locale/fa'],
          themes: ['./src/js/themes.js'],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
};
