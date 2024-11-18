
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      style1: ['Halant'],
      Rampart: ['Rampart One', 'Cursive']
    },
  },
  plugins: [require('tailwindcss-motion')], 
};