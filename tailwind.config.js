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
    }
  },
  plugins: [],
}