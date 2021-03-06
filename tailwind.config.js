const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia,
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
