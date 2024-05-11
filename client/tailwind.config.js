/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom': '3rem',
        'medium': '4rem',
        'custom-large': '7rem'
      },
      aspectRatio: {
        '16/9': [16, 9]
      }
    },
  },
  plugins: [],
}