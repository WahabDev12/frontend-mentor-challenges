/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jakarta: "jakarta"
      }
    },  
    colors:{
      "white":"hsl(0, 0%, 100%)",
      "light-grayish-blue":"hsl(210, 60%, 98%)",
      "light-grayish-blue-100": 'hsl(211, 68%, 94%)',
      "light-grayish-blue-200":'hsl(205, 33%, 90%)',
      "grayish-blue":"hsl(219, 14%, 63%)",
      "dark-grayish-blue":"hsl(219, 14%, 63%)",
      "very-dark-blue":"hsl(224, 21%, 14%)",
      "red":"hsl(1, 90%, 64%)",
      "blue":"hsl(219, 85%, 26%)"

    }
  },
  plugins: [],
}