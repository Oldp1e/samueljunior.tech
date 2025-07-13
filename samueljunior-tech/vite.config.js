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
          icons: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1500,
    target: 'esnext',
    // Otimizações para performance
    minify: 'esbuild',
    cssMinify: true,
    reportCompressedSize: false,
    // Gerar sourcemaps apenas em desenvolvimento
    sourcemap: false,
    // Configurações para lidar com CommonJS modules
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  // Preload de recursos críticos
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  },
  // Otimizações de bundle
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react']
  },
  // Configurações para resolver problemas com dependências
  resolve: {
    alias: {
      // Fix para problemas com base64-js e buffer
      'base64-js': 'base64-js/base64js.min.js'
    }
  }
})
