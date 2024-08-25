import { tailwindThemes } from './src/js/themes';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: tailwindThemes,
  },
};
