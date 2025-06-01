/**
 * @file next-i18next.config.js
 * @description Configuration file for next-i18next library,
 * managing internationalization (i18n) settings for the Next.js application.
 */

const SUPPORTED_LOCALES = ['en', 'ar', 'es', 'pt', 'de'];

/**
 * next-i18next configuration object.
 * @module nextI18NextConfig
 * @property {object} i18n - Internationalization settings.
 * @property {string} i18n.defaultLocale - The default language to use when no locale is specified.
 * @property {string[]} i18n.locales - An array of all supported locales for the application.
 * @property {boolean} reloadOnPrerender - If set to true, translations will be reloaded on each prerender.
 * Useful for development to see immediate changes.
 * Should typically be false or conditionally true in production environments
 * to avoid performance overhead.
 */
const nextI18NextConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: SUPPORTED_LOCALES,
  },
  // Ensure that next-i18next looks for translation files in public/locales
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};

module.exports = nextI18NextConfig;
