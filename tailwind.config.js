/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myFontMontserrat: ["Montserrat", "serif"] // google font used
      }
    },
  },
  plugins: [
    
  ],
}