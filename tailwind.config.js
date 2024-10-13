/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        lightYellow : "#000FFF"
      },

      container : {
        center : true,
        padding : {
          DEFAULT : "1rem",
          sm : "7rem"
        }
      }

    },
  },
  plugins: [],
}

