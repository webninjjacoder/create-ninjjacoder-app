import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

export default defineConfig({
  server: {
    port: 3000,
  },
  appType: 'spa',
  publicDir: 'src/public',
  plugins: [react(), Pages()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
