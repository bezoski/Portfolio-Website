/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/Images/homeBackground.png')",
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
            fontFamily: 'Karla',
          },
        ],
        'display-xl': [
          '67px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.025em',
            fontWeight: '700',
            fontFamily: 'Karla',
          },
        ],
        'display-l': [
          '50px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Karla',
          },
        ],
        'display-m': [
          '38px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Karla',
          },
        ],
        'display-s': [
          '28px',
          {
            lineHeight: '1.3',
            letterSpacing: '-0.01em',
            fontWeight: '700',
            fontFamily: 'Karla',
          },
        ],
        'display-xs': [
          '21px',
          {
            lineHeight: '1.3',
            letterSpacing: '0',
            fontWeight: '700',
            fontFamily: 'Karla',
          },
        ],
        'body-xl': [
          '28px',
          {
            lineHeight: '1.4',
            letterSpacing: '0',
            fontWeight: '400',
            fontFamily: 'Merriweather',
          },
        ],
        'body-l': [
          '21px',
          {
            lineHeight: '1.45',
            letterSpacing: '0',
            fontWeight: '400',
            fontFamily: 'Merriweather',
          },
        ],
        'body-m': [
          '16px',
          {
            lineHeight: '1.45',
            letterSpacing: '0',
            fontWeight: '400',
            fontFamily: 'Merriweather',
          },
        ],
        'body-s': [
          '14px',
          {
            lineHeight: '1.6',
            letterSpacing: '0',
            fontWeight: '400',
            fontFamily: 'Merriweather',
          },
        ],
        'body-xs': [
          '12px',
          {
            lineHeight: '1.6',
            letterSpacing: '0',
            fontWeight: '400',
            fontFamily: 'Merriweather',
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
