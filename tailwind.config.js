/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      screens: {
        'max-xs': { max: '400px' },
        'min-xs': { min: '400px' },
      },
    },
  },
  plugins: [],
};
