/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03844e',
        accent: '#f99f1b'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          md: '3rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    }
  },
  plugins: [],
}