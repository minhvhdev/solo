/** @type {import('tailwindcss').Config} */

export const mode = 'jit';
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
  container:{
    center: true,
    padding: '0.5rem',
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1100px',
    xl: '1440px',
  },
  extend: {
    colors: {
      primary: '#123456',
      secondary: '#013294',
      danger: 'red',
      'ms-danger': {
        100: '#ba3344',
        200: '#501f1b',
      },
      'ms-primary': {
        100: '#4e4caf',
        200: '#3b3572',
        300: '#261e48',
      },
    },
    translate: {
      center: '-50%',
    },
    spacing: {
      center: '50%',
    },
    keyframes: {
      ripple: {
        to: {
          transform: 'scale(4)',
          opacity: 0,
        },
      },
      'ms-look': {
        '0%': {
          opacity: 0,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
        },
        '100%': {
          opacity: 1,
          width: '40vh',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
        },
      },
    },
    animation: {
      ripple: 'ripple .6s linear',
      'ms-look': 'ms-look .3s ease-in-out 1',
    },
  },
};
export const plugins = [];
