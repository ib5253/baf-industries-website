import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'assets-public',
  server: { host: '::', port: 8080 },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        industries: 'industries.html',
        products: 'products-services.html',
        projects: 'projects-experience.html',
      },
    },
  },
});
