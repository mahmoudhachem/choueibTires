/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'noto-kufi-arabic': ['"Noto Kufi Arabic"', 'sans-serif'],
      },
    },
  },
}
