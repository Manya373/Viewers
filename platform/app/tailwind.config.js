/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../ui/tailwind.config.js'), require('../ui-next/tailwind.config.js')],
  content: [
    './src/**/*.{jsx,js,ts,tsx, css}',
    '../../extensions/**/*.{jsx,js,ts,tsx, css}',
    '../ui/src/**/*.{jsx,js,ts,tsx, css}',
    '../../modes/**/*.{jsx,js,ts,tsx, css}',
    './node_modules/@ohif/ui/src/**/*.{js,jsx,ts,tsx, css}',
    '../../node_modules/@ohif/ui/src/**/*.{js,jsx,ts,tsx,css}',
    '../../node_modules/@ohif/ui-next/src/**/*.{js,jsx,ts,tsx,css}',
    '../../node_modules/@ohif/extension-*/src/**/*.{js,jsx,css, ts,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
    },
    fontSize: {
      xxs: '0.625rem', // 10px
      xs: '0.6875rem', // 11px
      sm: '0.75rem', // 12px
      base: '0.8125rem', // 13px
      lg: '0.875rem', // 14px
      xl: '1rem', // 16px
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        red: {
          light: '#FF6961', // Soft red
          main: '#FF0000', // Primary red
          dark: '#B20000', // Darker red
          hover: '#FF4C4C', // Hover state red
          active: '#CC0000', // Active red
        },
        black: {
          light: '#333333', // Dark gray
          main: '#000000', // Pure black
          dark: '#0D0D0D', // Deep black
          hover: '#1A1A1A', // Hover black
          active: '#2C2C2C', // Active black
        },
        background: {
          light: '#1A1A1A', // Blackish-gray background
          dark: '#000000', // Pure black background
        },
        input: {
          main: '#333333', // Blackish-gray for input fields
          disabled: '#1A1A1A',
          placeholder: '#4D4D4D',
        },
        overlay: 'rgba(0, 0, 0, 0.8)', // Black overlay with transparency
        common: {
          bright: '#FF6961', // Highlight red
          dark: '#800000', // Deep dark red
        },
      },
      boxShadow: {
        red: '0 4px 6px rgba(255, 0, 0, 0.3)', // Red shadow
        black: '0 4px 6px rgba(0, 0, 0, 0.5)', // Black shadow
        outline: '0 0 0 3px rgba(255, 0, 0, 0.5)', // Red outline for focus
      },
      backgroundColor: {
        primary: '#FF0000', // Red primary background
        secondary: '#000000', // Black secondary background
      },
      borderColor: {
        primary: '#FF0000', // Red borders
        secondary: '#000000', // Black borders
      },
    },
  },
  plugins: [],
};
