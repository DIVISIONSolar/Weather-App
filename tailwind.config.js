/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'abril-fatface': ['Abril Fatface', 'display'], // Imported from https://fonts.bunny.net/css?family=abril-fatface:400|rubik:600,800i,900i
        'rubik': ['Rubik', 'sans-serif'], // Imported from https://fonts.bunny.net/css?family=abril-fatface:400|rubik:600,800i,900i
      }
    },
  },
  plugins: [],
}
