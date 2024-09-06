/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {
   fontFamily: {
    popins: ['Poppins', 'sans-serif'],
   },
   backgroundImage: {
    linerGradient:
     'linear-gradient(240deg, #050301 -30.15%, #120A01 92.85%)',
    Btngradient:
     'linear-gradient(92deg, #FA8305 2.08%, #FB9E3C 117.25%)',
     'hero': "url('/home/joy.png')",
     'category':"url('/home/prod.png')"
   },
   container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
   },
   screens: {
    '3xl': '2100px',
    '4xl': '2600px',
   },
  },
 },
 plugins: [],
}
