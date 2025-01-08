/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: 'rgb(248,248,248)',
          DEFAULT: 'rgb(255,255,255)'
        },
        text: {
          primary: '#000000',
          secondary: 'rgb(0,0,0,0.8)'
        },
        border: {
          DEFAULT: 'rgb(209,213,219)'
        }
      }
    }
  },
  plugins: [],
}