import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All routes that need to be pre-rendered for SEO
const PRERENDER_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/portfolio",
  "/testimonials",
  "/blog",
  "/services",
  "/services/web-development",
  "/services/software-development",
  "/services/erp-systems",
  "/services/inventory-management",
  "/services/ui-ux-design",
  "/services/branding",
  "/services/seo",
  "/services/digital-marketing",
  "/services/ai-solutions",
  "/services/ecommerce",
  "/services/insurance-software",
  "/services/mobile-app-development",
  "/services/saas-development",
  "/software-company-mysore",
  "/software-company-bangalore",
  "/web-development-mysore",
  "/web-development-bangalore",
  "/web-development-mangalore",
  "/software-development-karnataka",
];

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      output: {
        // Vite 8 compatible manual chunk splitting
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // React vendor bundle
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor";
            }

            // SEO bundle
            if (id.includes("react-helmet-async")) {
              return "helmet";
            }

            // Tailwind / styling
            if (
              id.includes("tailwindcss") ||
              id.includes("@tailwindcss")
            ) {
              return "styles";
            }

            // Remaining third-party packages
            return "misc";
          }
        },
      },
    },

    // Production optimisation
    minify: "oxc",

    // Disable sourcemaps in production
    sourcemap: false,

    // Warning limit
    chunkSizeWarningLimit: 600,

    // Better performance
    cssCodeSplit: true,

    // Improve output compression
    reportCompressedSize: true,
  },

  // CSS optimisation
  css: {
    devSourcemap: true,
  },

  // Development server
  server: {
    host: true,
    port: 5173,
  },

  // Preview server
  preview: {
    host: true,
    port: 4173,
  },

  // SEO-friendly define values
  define: {
    __PRERENDER_ROUTES__: JSON.stringify(PRERENDER_ROUTES),
  },
});