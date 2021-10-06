module.exports = {
  purge: ['./index.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'titillium': "'Titillium Web', 'sans-serif'"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
