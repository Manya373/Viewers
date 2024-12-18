module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../ui-next/**/*.{ts,tsx,js,jsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
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
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      colors: {
        red: {
          light: '#FF6961', // Light red
          DEFAULT: '#FF0000', // Main red
          dark: '#B20000', // Dark red
        },
        black: {
          light: '#333333', // Light black (dark gray)
          DEFAULT: '#000000', // Main black
          dark: '#0D0D0D', // Dark black
        },
        highlight: '#FF0000', // Highlight in red
        border: '#333333', // Black border
        input: '#1A1A1A', // Blackish-gray for inputs
        ring: '#FF4C4C', // Light red ring for focus states
        background: {
          DEFAULT: '#000000', // Default black background
          light: '#1A1A1A', // Lighter black background
        },
        foreground: '#FF0000', // Red foreground text
        primary: {
          DEFAULT: '#FF0000', // Red primary color
          foreground: '#FFFFFF', // White text on red
        },
        secondary: {
          DEFAULT: '#000000', // Black secondary color
          foreground: '#FF6961', // Light red text on black
        },
        destructive: {
          DEFAULT: '#FF4C4C', // Bright red for destructive actions
          foreground: '#FFFFFF', // White text
        },
        muted: {
          DEFAULT: '#1A1A1A', // Muted black
          foreground: '#B20000', // Muted dark red text
        },
        accent: {
          DEFAULT: '#FF4C4C', // Accent color in bright red
          foreground: '#FFFFFF', // White text
        },
        popover: {
          DEFAULT: '#0D0D0D', // Dark black for popovers
          foreground: '#FF6961', // Light red for text
        },
        card: {
          DEFAULT: '#1A1A1A', // Blackish-gray for cards
          foreground: '#FFFFFF', // White text
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      bkg: {
        low: '#050505', // Deep black for low priority
        med: '#0D0D0D', // Mid black
        full: '#000000', // Pure black
      },
      info: {
        primary: '#FFFFFF', // White for primary info
        secondary: '#FF6961', // Light red for secondary info
      },
      actions: {
        primary: '#FF0000', // Main action color
        highlight: '#FF4C4C', // Highlight in bright red
        hover: 'rgba(255, 0, 0, 0.2)', // Red hover with transparency
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
