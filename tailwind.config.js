/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#f8f3ea',
          200: '#efe6d4',
          300: '#e3d4b8',
        },
        clay: {
          400: '#c9a87c',
          500: '#b08d5e',
          600: '#8f6f47',
        },
        espresso: {
          700: '#4a3829',
          800: '#362a1f',
          900: '#241b14',
        },
        blush: {
          200: '#f3d9d2',
          300: '#e9bfb4',
          400: '#d99b8c',
        },
        sage: {
          300: '#b9c4a4',
          500: '#7a8a64',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(54, 42, 31, 0.18)',
        card: '0 18px 50px -20px rgba(54, 42, 31, 0.28)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
