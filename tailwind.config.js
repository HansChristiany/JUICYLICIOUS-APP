/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        pbold: ["Moderustic-Bold", "sans-serif"],
        pextrabold: ["Moderustic-ExtraBold", "sans-serif"],
        plight: ["Moderustic-Light", "sans-serif"],
        pmedium: ["Moderustic-Medium", "sans-serif"],
        pregular: ["Moderustic-Regular", "sans-serif"],
        psemibold: ["Moderustic-SemiBold", "sans-serif"],
        
      },

    



    },
  },
  plugins: [],
}

