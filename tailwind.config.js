/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#1E222E',
      'slate-grey': {
        100: '#F5F7F9',
        400: '#70798C',
        600: '#444857',
        700: '#2D303A',
        800: '#313543',
      },
      'light-concrete': '#EFF2F4',
      'pumpkin': {
        300: '#F9A03F',
        'base': '#D87334', // 500
        700: '#B55C2E',
      },
      'burnt-pumpkin': {
        'base': '#9B432F', // 800
      },
      'success': '#3B9C4A',
      'error': '#C71F1F',
      'warning': '#d99a22',
      'white': '#fff',
    },
    fontSize: {
      'xxs': '.625rem',
      'xs': '.75rem',
      'sm': '0.9rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {

    }
  },
  plugins: [],
};
