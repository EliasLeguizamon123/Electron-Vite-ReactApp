import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: path.resolve(__dirname, './dist/'),
  plugins: [react()]
})
