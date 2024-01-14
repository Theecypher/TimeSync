/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': [" 'Montserrat', sans-serif"]
      },
      colors:{
        'main-blue': '#034592',
        'light-blue': '#E3EFFC',
        'primary-blue': '#3D89DF',
        'secondary-blue' : '#B6D8FF',
        'error-2' : '#DD524D',
        'error-1': '#D42620',
        'warning-2': '#F5B546',
        'success-green-2': '#40B869', 
      }
    },
  },
  plugins: [],
}