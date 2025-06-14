/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Rubik', 'sans-serif'],
        FastOne : ['Faster One', 'cursive'],
      },
    },
  },
  plugins: [],
}