/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens: {
        xxs: '375px',
        xs: '425px',
      },
      colors: {
      
        primaryColor: {
         100:'#555658'
        },

        appColorDark:{
          100:'#777777',
          200:'#555658',
          500:'#000000'
        }
      
      },
      fontSize: {
        xxs: '.625rem',
      },
    },
  },
  variants: {
    extend: {},
  },
}
