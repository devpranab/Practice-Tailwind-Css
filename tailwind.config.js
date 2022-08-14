/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  darkMode: "class", //'class' or 'media'
  theme: {
    extend: {
      colors: {
        "yellow": "#F00"
      }
    },
    container: {
      padding: '2rem',
    }
  },
  variants: {
  },
  plugins: [],
}
