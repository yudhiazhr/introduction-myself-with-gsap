/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        ultra: ["Ultra", "sans-serif"],
        bree: ["Bree Serif", "sans-serif"],
        abril: ["Abril Fatface", "sans-serif"]
      },
      colors: {
        primary: '#FAEEE7',
        secondary: '#B33030',
        dark: '#151515',
        tertiary: '#EA906C'
      },
      screens: {
        '2xl' : '1320px'
      },
      
    },
  },
  plugins: [],
}

