import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Copy the built index.html to 404.html so that client-side routes
// (e.g. /impressum) still boot the SPA when reloaded on GitHub Pages.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const dist = resolve(process.cwd(), 'dist')
      try {
        copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
      } catch (e) {
        console.warn('[spa-404-fallback] could not create 404.html:', e.message)
      }
    },
  }
}

// Apex custom domain (psychotherapie-vonloe.de) → base '/'
export default defineConfig({
  base: '/',
  plugins: [vue(), spaFallback()],
})
