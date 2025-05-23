/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          600: '#7bb62e',
          700: '#386641',
        },
      },
    },
  },
  plugins: [],
};
