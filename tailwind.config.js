/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/atoms/**/*.{ts,tsx}',
    './src/utils/**/*.{ts,tsx}',
    './src/containers/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      //min-width
      desktop: '1200px',
      'desktop-small': '1023px',
      tablet: '767px',
      'tablet-small': '640px',
      mobile: '500px',
      'mobile-small': '400px',
      //max-width
      'max-desktop': { max: '1200px' },
      'max-desktop-small': { max: '1023px' },
      'max-tablet': { max: '767px' },
      'max-tablet-small': { max: '640px' },
      'max-mobile': { max: '500px' },
      'max-mobile-small': { max: '400px' },
    },
    colors: {
      white: '#ffff',
      gray: '#dde1e7',
      lightBlack: '#2e2e2e',
      black: '#020205',
      lightPink: '#FC88ED',
      pink: '#FA3DE2',
      darkPink: '#A43F99',
      darkGreen: '#05c148',
      lightOrange: '#F0AD4E',
      darkRed: '#c1002a',
    },
  },
};
