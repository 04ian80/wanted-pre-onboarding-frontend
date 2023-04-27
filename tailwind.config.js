/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '600px' },
        'min-sm': { min: '600px' },
        'max-xs': { max: '400px' },
        'min-xs': { min: '400px' },
      },
    },
  },
  plugins: [],
};
