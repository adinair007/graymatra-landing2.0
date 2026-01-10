// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/graymatra-landing2.0/',  // ← IMPORTANT: Must match your repo name exactly!
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})