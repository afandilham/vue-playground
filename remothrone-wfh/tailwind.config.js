const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [
          'Poppins', 'sans-serif',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  plugins: [],
}
