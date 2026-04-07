import { defineConfig } from 'vite'
import { rnw } from "vite-plugin-rnw";

export default defineConfig({
  base: '/ux308practicefinal/',
  plugins: [rnw()],
  server: {
    allowedHosts: true
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
})