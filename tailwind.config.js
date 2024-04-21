/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(30px) scale(0.9)' },
          '100%': { opacity: 1, transform: 'translateY(0px) scale(1)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.5s',
      },
    },
  },
  plugins: [],
}
