/** @type {import('tailwindcss').Config} */

export const mode = 'jit';
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1100px',
    xl: '1440px',
  },
  extend: {
    colors: {
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
      'ms-look': 'ms-look .3s ease-in-out 1',
    },
  },
};
export const plugins = [];
