/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
        'spartan': ['League Spartan', 'sans-serif'],
      }
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'darkblue': '#070724',
      'white': '#ffffff',
      'darkgrey': '#38384F',
      'grey': '#838391',
    }
  },
  plugins: [],
}