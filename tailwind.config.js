/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Balsamiq:["Balsamiq Sans", "sans-serif"]
      } ,keyframes: {
        stretch: {
          '0%': { opacity:"0.2"},
          '25%': { opacity:"0.4"},
          '50%': { opacity:"0.6"},
          '75%': { opacity:"0.8"},
          '100%': { opacity:"1"},
        }
      }, animation: {
        stretch: 'stretch 1s ease-in ',
      },

      
      
    },
  },
  plugins: [],
  
}
