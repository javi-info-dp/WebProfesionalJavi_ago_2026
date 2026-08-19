import os from 'node:os';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: `${os.tmpdir()}/vite-cache-webprofesionaljavi`,
})
