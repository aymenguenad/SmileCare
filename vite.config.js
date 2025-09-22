import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'copy-404',
    closeBundle () {
      copyFileSync (
        resolve(__dirname, 'dist/index.html'),
        resolve(__dirname, 'dist/404.html')
      )
    }
  }],
  base: '/SmileCare/'
})
