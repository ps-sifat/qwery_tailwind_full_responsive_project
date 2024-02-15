/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      opensans_font: ['Open Sans']
    },
    extend: {
      maxWidth: {
        container: '1320px',
      },
    },
  },
  plugins: [],
}