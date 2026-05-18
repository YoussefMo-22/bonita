/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgandy: {
          DEFAULT: "#800020",
          light: "#a3324d",
          dark: "#5c0018",
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d9",
          300: "#f4a9ba",
          400: "#ec7793",
          500: "#df4d6f",
          600: "#cc2d57",
          700: "#ab1f46",
          800: "#800020",
          900: "#6e1c38",
        },
        softCream: {
          DEFAULT: "#FFDECB",
          dark: "#f0e8df",
          light: "#FDFBF9",
        },
        rose: {
          petal: "#d4556b",
          deep: "#8b0023",
        }
      },
      fontFamily: {
        script: ['ElegantWedding', 'Great Vibes', 'cursive'],
        serif: ['Playfair Display', 'serif'],
        arabic: ['ArslanWessam', 'Amiri', 'serif'],
      },
      animation: {
        'float-petal': 'floatPetal 12s linear infinite',
        'float-petal-reverse': 'floatPetalReverse 15s linear infinite',
        'gentle-sway': 'gentleSway 6s ease-in-out infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'breathe': 'breathe 4s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
