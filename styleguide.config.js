const path = require('path')

module.exports = {
  components: 'src/components/general/**/[A-Z]*.js',
  webpackConfig: require('./config/webpack.config.dev.js'),
  sections: [
    { name: 'Elements', components: 'src/components/elements/**/*.js' }
  ],
  showCode: true,
  showUsage: true,
  styleguideComponents: {
    Wrapper: path.join(__dirname, './styleguide/ThemeWrapper')
  },
  ignore: ['**/__tests__/**', '**/*.style.js', '**/form/**']
}
