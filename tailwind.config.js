/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"]
      },
      colors: {
        primary: '#FEF9EF',
        secondary: '#B31312',
        dark: '#151515',
        tertiary: '#EA906C'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

