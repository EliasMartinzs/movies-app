
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bg: '#1F1D2B',
        input: '#252836',
        active: '#12CDD9',
      }
    },
  },
  plugins: [],
};
