// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/',  // ← IMPORTANT: Must match your repo name exactly!
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})