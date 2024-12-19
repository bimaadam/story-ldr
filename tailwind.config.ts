const catppuccin = require('@catppuccin/daisyui');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'index.html',
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      catppuccin('mocha', { primary: 'mauve', secondary: 'rosewater', accent : 'lavender' }),
    ],
  },
};
