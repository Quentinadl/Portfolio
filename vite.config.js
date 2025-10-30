import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
plugins: [react()],
  build: {
    outDir: 'dist', // Netlify va lire ce dossier
  },
server: { port: 5173 }
})