import { join } from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import presetIcons from '@unocss/preset-icons'

function resolve(dir: string): string {
  return join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetIcons({
        collections: {
          carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
        },
      })],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
  server: {
    port: 3333,
  },
})
