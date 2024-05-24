import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/api": "http://192.168.0.106:8000",
      "/api": "http://127.0.0.1:4000",
    }
  },
  plugins: [react()],
})
