/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'custom-dark': '#2E2E2E',
        'antiquewhite': '#FAEBD7',
        'cyan' : '#00FFFF'
      },
    },
  },
  plugins: [],
}

