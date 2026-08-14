/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary — calm trust-blue drawn from the logo's "Psychotherapie" script
        petrol: {
          50: '#f2f6fb',
          100: '#e2ecf6',
          200: '#c5d8ec',
          300: '#9cbcdd',
          400: '#6e97c4',
          500: '#4f7cb0',
          600: '#3f6fa6',
          700: '#325982',
          800: '#2c4a6b',
          900: '#283f5a',
        },
        // Soft green accent from the logo's dandelion
        moss: {
          50: '#f3f8f2',
          100: '#e4f0e2',
          200: '#cae0c6',
          300: '#a3c99d',
          400: '#7fb079',
          500: '#63a05d',
          600: '#4d8548',
          700: '#3f6b3c',
          800: '#365634',
          900: '#2e472d',
        },
        // Muted violet accent from the logo's dandelion
        iris: {
          50: '#f6f3f9',
          100: '#ece5f2',
          200: '#dacce6',
          300: '#c0a9d4',
          400: '#a487c0',
          500: '#8e6fb3',
          600: '#7757a0',
          700: '#634784',
          800: '#533d6c',
          900: '#46345a',
        },
        // Warm off-white neutrals echoing the parquet floors
        paper: {
          50: '#fdfcfa',
          100: '#f7f5f1',
          200: '#ece8e1',
          300: '#ddd7cc',
        },
        ink: '#2b3440',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(2deg)' },
        },
        'hero-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'hero-fade-in': 'hero-fade-in 0.8s ease-out forwards',
        'hero-fade-in-1': 'hero-fade-in 0.8s ease-out 0.1s forwards',
        'hero-fade-in-2': 'hero-fade-in 0.8s ease-out 0.2s forwards',
        'hero-fade-in-3': 'hero-fade-in 0.8s ease-out 0.35s forwards',
        'hero-fade-in-4': 'hero-fade-in 0.8s ease-out 0.5s forwards',
      },
    },
  },
  plugins: [],
}
