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
   },
   container: {
    center: true,
   },
  },
 },
 plugins: [],
}
