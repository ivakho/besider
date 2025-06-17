import { defineConfig } from 'vite';

export default defineConfig({
  base: '/besider/',
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.nytimes.com',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
});
