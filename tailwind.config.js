/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      purple: {
       900: '#581c87',
      },
      violet: {
        700: '#6d28d9'
      }
    },
    variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
    },
   },

  },
  plugins: [],
}

