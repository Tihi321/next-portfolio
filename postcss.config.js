const postcssFontMagician = require('postcss-font-magician');
const postcssNext = require('postcss-cssnext');

const fontsPath = '/static/fonts';

module.exports = {
  plugins: [
    postcssFontMagician({
      custom: {
        portfolio: {
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
        Karla: {
          400: ['woff2', 'woff'],
          700: ['woff2', 'woff'],
        },
        Rubik: {
          400: ['woff2', 'woff'],
          700: ['woff2', 'woff'],
        },
      },
      display: 'swap',
      foundries: ['custom', 'google'],
    }),
    postcssNext({
      browsers: [
        'last 2 version',
      ],
      features: {
        rem: false,
        customProperties: {
          warnings: false,
          preserve: true,
        },
      },
    }),
  ],
};
