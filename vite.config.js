import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Add this line
      include: "**/*.tsx",
    }),
  ],
  server: {
    port: 3500,
    open: true,
  },
  preview: {
    port: 3001,
    open: true,
  },
});
