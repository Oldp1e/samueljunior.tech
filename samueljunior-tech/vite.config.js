import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
          // PDF será carregado apenas com a página Curriculum
          curriculum: ['@react-pdf/renderer', '@react-pdf/pdfkit', '@react-pdf/primitives', '@react-pdf/layout', '@react-pdf/font', 'file-saver']
        }
      }
    },
    chunkSizeWarningLimit: 1500,
    target: 'esnext'
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
