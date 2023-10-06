import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createServer } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

createServer({
  root: './dist',
  server: {
    middleware: async (req, res, next) => {
      if (req.url !== '/') {
        res.writeHead(302, { Location: '/' });
        res.end();
        return;
      }
      next();
    },
  },
})
