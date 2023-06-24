/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        footerGray: "#D1D1D1",
        customBlue: "#006198",
        brightGreen: "#9BD030",
        customBlack: "#696969"
      }
    },
    fontFamily: {
      'sans': 'Inter',
    }
  },
  plugins: [],
}

