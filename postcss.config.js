const postcssFontMagician = require('postcss-font-magician');
const autoPrefixer = require('autoprefixer');

module.exports = {
  plugins: [
    autoPrefixer,
    postcssFontMagician({
      variants: {
        'Open Sans Condensed': {
          400: ['woff2', 'woff'],
          800: ['woff2', 'woff'],
        },
        'Open Sans': {
          400: ['woff2', 'woff'],
          800: ['woff2', 'woff'],
        },
      },
      display: 'swap',
      foundries: [ 'google'],
    })
  ]
};
