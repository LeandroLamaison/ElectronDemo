import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  root: resolve(__dirname, 'src/frontend'),
  base: './',
  build: {
    outDir: resolve(__dirname, 'dist/frontend'),
    emptyOutDir: true
  }
})
