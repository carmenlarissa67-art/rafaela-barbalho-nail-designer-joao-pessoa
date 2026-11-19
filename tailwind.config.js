/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf8f0',
          100: '#f4ecda',
          200: '#e8dcbf',
          300: '#d5c396',
          400: '#8f97ab',
          500: '#646f8a',
          600: '#4a5571',
          700: '#2f3d5e',
          800: '#1c2b4d',
          900: '#14203b',
          950: '#0c1428',
        },
        ink: { DEFAULT: '#0c1428', soft: '#1c2b4d', mute: '#7a8197' },
        champagne: { DEFAULT: '#D2B56E', light: '#F0E4C3', dark: '#9C7D35' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Pinyon Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
