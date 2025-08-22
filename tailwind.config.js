/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-green': '#badb61',
        'custom-green-dark': '#a8c955',
      }
    },
  },
  plugins: [],
};
