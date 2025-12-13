import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // REMPLACER PAR LE NOM DE VOTRE REPO GITHUB (ex: '/mon-portfolio/')
})
