import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(
    {
      include: '**/*.svg',
      svgrOptions: {
        exportType: 'default',
      },
    }
  )],
  base: 'https://joelrondinelpacheco.github.io/portafolio',
})
