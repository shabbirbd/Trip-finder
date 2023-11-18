/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        elemental: "#4338ca",
        darkBg: "#111827",
        light: "#FAEBED",
        container1: "#F3F4F6",
        container2: "#FEF7ED"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

