import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { cloudflare } from "@cloudflare/vite-plugin";

// Plugin pour remplacer les variables dans index.html
function htmlPlugin() {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      const gaId = process.env.VITE_GA_ID || '';
      if (gaId) {
        return html.replace(/%VITE_GA_ID%/g, gaId);
      } else {
        // Si pas d'ID, on supprime le code Google Analytics
        return html.replace(/<!-- Google Analytics -->[\s\S]*?<\/script>/g, '');
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin(), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})