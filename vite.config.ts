import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

function resolve(dir: string): string {
  return join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
})
