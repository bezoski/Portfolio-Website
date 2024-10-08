/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 0 4px rgba(0, 0, 0, 0.4)',
        'drop-custom': '0 0 4px 2px rgba(255, 255, 255, 0.15)',
      },
      backgroundImage: {
        hero: "url('/assets/homeBackground.png')",
      },
      backgroundPosition: {
        'custom-position-mobile': '60% 50%',
        'custom-position': '50% 70%',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.025em', // -2.5%
        tighter: '-0.02em', // -2%
        tight: '-0.01em', // -1%
        normal: '0', // 0%
      },
      lineHeight: {
        snug: '1.3', // 130%
        relaxed: '1.4', // 140%
        relaxedMore: '1.45', // 145%
        loose: '1.6', // 160%
      },
      fontSize: {
        'display-2xl': [
          '90px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.025em',
            fontWeight: '700',
          },
        ],
        'display-xl': [
          '67px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.025em',
            fontWeight: '700',
          },
        ],
        'display-l': [
          '50px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        'display-m': [
          '38px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],
        'display-s': [
          '28px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.01em',
            fontWeight: '700',
          },
        ],
        'display-xs': [
          '21px',
          {
            lineHeight: '1.3',
            letterSpacing: '0',
            fontWeight: '700',
          },
        ],
        'body-xl': [
          '28px',
          {
            lineHeight: '1.4',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'body-l': [
          '21px',
          {
            lineHeight: '1.45',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'body-m': [
          '16px',
          {
            lineHeight: '1.45',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'body-s': [
          '14px',
          {
            lineHeight: '1.6',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
        'body-xs': [
          '12px',
          {
            lineHeight: '1.6',
            letterSpacing: '0',
            fontWeight: '400',
          },
        ],
      },
      colors: {
        'primary-floral-white': '#fffcf2',
        'primary-flame': '#eb5e28',
        'secondary-gunmetal': '#272c2c',
        'secondary-battleship-gray': '#888888',
        'neutral-night': '#111717',
      },
    },
  },
  plugins: [],
};
