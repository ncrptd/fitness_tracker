import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      "theme_color": "#f69435",
      "background_color": "#f69435",
      "display": "standalone",
      "scope": "/",
      "start_url": "/",
      "short_name": "vite test",
      "description": "testing vite pwa",
      "name": "vite test",
      "icons": [
        {
          src: '/icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  })],
})
