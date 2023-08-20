/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#0f0c29",
          600: "#021B79",
          300: "#0575E6"
        }
      }
    },
  },
  plugins: [],
}
