import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// BASE_PATH diisi otomatis oleh workflow deploy: "/" di domain sendiri,
// "/<nama-repo>/" di <username>.github.io. Jangan diubah manual.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
