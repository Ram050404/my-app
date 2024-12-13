/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto', 'sans-serif']
      },
      colors:{
        'myblue' : '0f172a',

      },
      gridTemplateColumns:{
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}