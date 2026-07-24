/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', '../../packages/shared/src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        luxury: { 900: '#0a0a0a', 800: '#141414', 700: '#1a1a1a', 600: '#2a2a2a', 500: '#3a3a3a', gold: '#d4a853', 'gold-light': '#e8c06a', 'gold-dark': '#b8923a' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}