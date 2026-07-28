import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    // ✅ This ensures assets are copied correctly
    assetsDir: 'assets'
  },
  server: {
    port: 5173
  },
  // ✅ Public directory for static files
  publicDir: 'public'
})