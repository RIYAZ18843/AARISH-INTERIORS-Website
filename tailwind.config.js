/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C5A059', // Champagne Gold
        darkGreen: '#0B1120', // Midnight Slate (keeping variable name to prevent breaking classes)
        lightBeige: '#FAFAFA', // Ultra-clean off-white
        heading: '#0F172A', // Slate 900
        text: '#475569' // Slate 600
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
