const withSass = require('@zeit/next-sass');
module.exports = withSass({
  cssModules: true,
  sassLoaderOptions: {
    sourceMap: true
  },
  postcssLoaderOptions: {
      sourceMap: true
  }
});