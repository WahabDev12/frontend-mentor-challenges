/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit: 'outfit'
      } 
    },
    colors:{
      'white': 'hsl(0, 0%, 100%)',
      'grayish-blue':'hsl(220, 15%, 55%)',
      'dark-blue':'sl(218, 44%, 22%)',
      'light-gray':'hsl(212, 45%, 89%)'
    }
  },
  plugins: [],
}