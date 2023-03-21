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
        400: '#70798C',
        600: '#444857',
        800: '#313543'
      },
      'light-concrete': '#EFF2F4',
      'pumpkin': '#D87334',
      'burnt-pumpkin': '#9B432F',
      'success': '#3B9C4A',
      'error': '#C71F1F',
      'white': '#fff',
    },
    fontSize: {
      'xxs': '.625rem',
      'xs': '.75rem',
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
};
