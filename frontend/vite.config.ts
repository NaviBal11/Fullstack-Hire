import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server:{
    proxy: {
    '/api': {
      target: 'https://fullstack-newhire-backend.vercel.app' || 'http://localhost:3000',
      changeOrigin: true,
    },
  },
},
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
