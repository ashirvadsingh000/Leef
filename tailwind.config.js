/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-gradiant':' linear-gradient(to right, #6f0000, #200122)',
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'anta': ['Anta', 'sans-serif'],
    }
  },
  plugins: [
    
  ],
}