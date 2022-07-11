import react from '@vitejs/plugin-react'
import * as path from 'path'
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/football-app/',
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src/')}],
  },
})
