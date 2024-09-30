import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Enable fallback for SPA
  },
  build: {
    outDir: 'dist', // Default build output
  },
});
