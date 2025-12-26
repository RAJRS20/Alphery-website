import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Performance optimizations
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Asset optimization
    assetsInlineLimit: 4096, // 4kb - inline small assets as base64
    chunkSizeWarningLimit: 1000,
  },
  // Performance: enable faster dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // Server configuration for development
  server: {
    port: 5173,
    strictPort: false,
    open: true, // Auto-open browser
  },
  // Preview configuration
  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },
})
