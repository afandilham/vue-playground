module.exports = {
  purge: ['./index.html', './src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'quicksand': "'Quicksand', 'sans-serif'"
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover', 'hover']
    },
  },
  plugins: [],
};