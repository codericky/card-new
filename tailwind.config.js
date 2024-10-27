
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {},
    fontFamily: {
      style1: ['Halant'],
      Rampart: ['Rampart One', 'Cursive']
    },
  },
  plugins: [],
}