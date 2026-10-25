/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ammachi: {
          50: '#FDFBF7',
          100: '#FAF5EA',
          200: '#F3E8CE',
          300: '#E7D5AA',
          400: '#D5B67A',
          500: '#B8860B', // Dark goldenrod / Turmeric
          600: '#9C6D04',
          700: '#7B5203',
          800: '#5F3D02',
          900: '#3D2601',
        },
        terracotta: {
          50: '#FDF6F3',
          100: '#FAEAE3',
          200: '#F5D3C5',
          300: '#EBB49E',
          400: '#DE8B6F',
          500: '#C85A32', // Rich Tamil clay / terracotta
          600: '#B44520',
          700: '#943415',
          800: '#7B2A13',
          900: '#652513',
        },
        leaf: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E', // Banana leaf green
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        curry: {
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Noto Sans Tamil', 'system-ui', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'Plus Jakarta Sans', 'sans-serif'],
        display: ['Outfit', 'Noto Sans Tamil', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(180, 69, 32, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'warm-lg': '0 10px 25px -3px rgba(180, 69, 32, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
