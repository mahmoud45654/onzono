/** @type {import('next').NextConfig} */
/**
 * @file next.config.js
 * @description Next.js configuration file.
 * Handles React Strict Mode, internationalization (i18n), and other Next.js specific settings.
 */

// Import next-i18next config to reuse i18n settings
const nextI18NextConfig = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true, // Enable React strict mode for highlighting potential problems
  
  // Internationalization (i18n) configuration for Next.js routing
  i18n: {
    locales: nextI18NextConfig.i18n.locales, // Use locales from next-i18next config
    defaultLocale: nextI18NextConfig.i18n.defaultLocale, // Use defaultLocale from next-i18next config
    localeDetection: true, // Automatically detect the user's preferred locale
  },

  // Add any other Next.js specific configurations here if needed
  // For example, image optimization domains, webpack configurations, etc.
  images: {
    domains: [], // Add external image domains if you use them, e.g., ['example.com']
  },
};

module.exports = nextConfig;
