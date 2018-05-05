const path = require('path')

module.exports = {
  components: '../src/components/general/**/[A-Z]*.js',
  webpackConfig: require('./webpack.config.dev.js'),
  sections: [
    { name: 'Elements', components: '../src/components/base/**/index.js' }
  ],
  showCode: true,
  showUsage: true,
  styleguideDir: '../styleguide',
  styleguideComponents: {
    Wrapper: path.join(__dirname, '../styleguide/ThemeWrapper')
  },
  ignore: ['**/__tests__/**', '**/*.style.js', '**/form/**']
}
