/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#101A24',
        charcoal: '#17191C',
        ivory: '#F5F1E9',
        champagne: '#C5AA82',
        stone: '#D8D0C4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Amiri', 'Georgia', 'serif'],
        sans: ['Jost', '"Noto Naskh Arabic"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      transitionTimingFunction: {
        lux: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        menuIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        menuIn: 'menuIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
    },
  },
  plugins: [],
};