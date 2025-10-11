import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.140.2', // biar bisa diakses lewat IP lokal
    port: 5173,      // port default Vite, bisa diganti misalnya 3000
  },
})
