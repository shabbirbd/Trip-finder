/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        elemental: "#4338ca",
        light: "#FAEBED",
        container1: "#F3F4F6",
      }
    },
  },
  plugins: [],
}

