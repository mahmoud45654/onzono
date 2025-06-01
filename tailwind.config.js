/** @type {import('tailwindcss').Config} */
/**
 * @file tailwind.config.js
 * @description Tailwind CSS configuration file for Onzono SkyConnect project.
 * Defines custom themes, colors, fonts, and content paths for Tailwind's JIT compiler.
 */
module.exports = {
  /**
   * Defines the files where Tailwind should look for classes to generate.
   * This is crucial for tree-shaking unused styles in production.
   */
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  /**
   * Extends Tailwind's default theme with custom configurations.
   * This allows for adding custom colors, fonts, spacing, etc.,
   * without overriding the default utility classes.
   */
  theme: {
    extend: {
      /**
       * Custom color palette for the application.
       * These colors directly map to the CSS variables defined in `styles/globals.css`,
       * ensuring consistency and easy management of the design system.
       */
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-dark': 'var(--primary-dark)',
        'secondary-color': 'var(--secondary-color)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
        'border-color': 'var(--border-color)',
      },
      /**
       * Custom font families.
       * Ensure these match the fonts imported in `pages/_app.js` and defined in `styles/globals.css`.
       * This allows using classes like `font-sans` or `font-heading`.
       */
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      /**
       * Custom box shadows.
       * Example of mapping CSS variables to Tailwind shadows.
       */
      boxShadow: {
        'light': 'var(--shadow-light)',
        'medium': 'var(--shadow-medium)',
      },
      // You can add more theme extensions here, e.g., spacing, borderRadius, etc.
    },
  },
  /**
   * Plugins for Tailwind CSS.
   * For example, adding custom utility plugins.
   */
  plugins: [],
};
