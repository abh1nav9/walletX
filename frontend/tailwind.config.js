/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        handjet: ["Handjet", "sans-serif"],
        poppins: ["poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
};
