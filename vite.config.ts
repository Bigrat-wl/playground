import { defineConfig } from 'vite';
import { resolve } from 'path';
import Unocss from 'unocss/vite';

export default defineConfig({
  plugins: [Unocss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        uno: resolve(__dirname, 'unocss/index.html'),
      },
    },
  },
});
