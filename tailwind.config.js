/*
 * TailwindCSS Configuration File
 *
 * Docs: https://tailwindcss.com/docs/configuration
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  important: false,
  purge: [
    './components/**/*.html',
    './components/**/*.vue',
    './components/**/*.jsx',
    './pages/**/*.html',
    './pages/**/*.vue',
    './pages/**/*.jsx',
  ],
  theme: {
    extend: {
      borderColor: {
        default: 'currentColor',
      },
    },
  },
  variants: {},
  plugins: [],
}
