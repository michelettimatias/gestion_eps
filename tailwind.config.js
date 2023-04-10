/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '66': '264px',
        '68': '272px'
      },
      fontSize: {
        'xxs': ['10px','11px']
      }
    },
  },
  plugins: [],
}