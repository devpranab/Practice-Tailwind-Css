/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["*"],
  darkMode: "class", //'class' or 'media'
  theme: {
    extend: {},
    container: {
      padding: '2rem',
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
