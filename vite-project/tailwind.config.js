 /** @type {import('tailwindcss').Config} */
 // tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
