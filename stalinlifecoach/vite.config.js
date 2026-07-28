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
    assetsDir: 'assets',
    copyPublicDir: true  // ✅ This ensures public folder is copied
  },
  server: {
    port: 5173
  },
  publicDir: 'public'   // ✅ Ensure public folder is used
})