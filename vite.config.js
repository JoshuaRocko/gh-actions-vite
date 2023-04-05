import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : 'https://joshuarocko.github.io/gh-actions-vite/',
  plugins: [react()],
})
