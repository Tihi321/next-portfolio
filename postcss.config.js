const postcssFontMagician = require('postcss-font-magician');
const autoPrefixer = require('autoprefixer');

const fontsPath = `/static/fonts`;

module.exports = {
  plugins: [
    autoPrefixer,
    postcssFontMagician({
      custom: {
        'portfolio': {
          variants: {
            normal: {
              400: {
                url: {
                  svg: `${fontsPath}/portfolio.svg`,
                  ttf: `${fontsPath}/portfolio.ttf`,
                  woff: `${fontsPath}/portfolio.woff`,
                },
              },
            },
          },
        },
      },
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
      foundries: [ 'custom', 'google' ],
    })
  ]
};
