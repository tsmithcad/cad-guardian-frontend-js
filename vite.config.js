// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    sitemap({
      hostname: 'https://www.cadguardian.com',
      routes: [
        '/',                // Home page
        '/about',           // About page
        '/pricing',         // Pricing page
        '/contact',         // Contact page
        '/login',           // Login page
        '/signup',          // Sign-up page
        '/recover',         // Account recovery page
        '/terms-of-service', // Terms of Service
        '/privacy-policy',  // Privacy Policy
        '/backlinks'        // Backlinks and Resources page
      ],
      changefreq: 'daily',  // Set how frequently each page changes
      priority: (route) => (route === '/' ? 1.0 : 0.8),  // Prioritize the homepage
      lastmod: new Date().toISOString(),  // Automatically set last modification date
    })
  ],
  server: {
    host: true,
    port: 5173,
  }
});
