/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing :{
        '25':'35rem'

      },
      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage:{
        'texture_pattern':"url('https://t4.ftcdn.net/jpg/04/84/11/15/360_F_484111532_W0WOkKeXQzF75XusA7R8e3llIDXqyCFm.jpg')"
      }
    },
  },
  plugins: [],
}