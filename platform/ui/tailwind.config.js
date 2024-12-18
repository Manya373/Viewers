const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{jsx,js,ts,tsx,css,mdx}'],
  theme: {
    extend: {
      colors: {
        // Custom colors
        overlay: 'rgba(0, 0, 0, 0.8)',
        red: {
          light: '#FF6961',
          main: '#FF0000',
          dark: '#B20000',
          hover: '#FF4C4C',
          active: '#CC0000',
        },
        black: {
          light: '#333333',
          main: '#000000',
          dark: '#0D0D0D',
          hover: '#1A1A1A',
          active: '#2C2C2C',
        },
        inputfield: {
          main: '#333333',
          disabled: '#1A1A1A',
          focus: '#FF6961',
          placeholder: '#4D4D4D',
        },
        bkg: {
          low: '#1A1A1A',
          med: '#0D0D0D',
          full: '#000000',
        },
        actions: {
          primary: '#FF0000',
          highlight: '#FF6961',
          hover: 'rgba(255, 0, 0, 0.2)',
        },
      },
    },
    colors: {
      ...defaultTheme.colors, // Keep the default colors
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    // Add other configurations as necessary
  },
  plugins: [],
};
