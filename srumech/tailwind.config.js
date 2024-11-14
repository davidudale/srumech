/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple" : "#1f1d5e",
        "light-white" : "rgba(255,255,255,0.17)",
      }
    },
  },
  plugins: [],
}