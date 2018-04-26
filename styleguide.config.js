module.exports = {
  components: 'src/components/general/**/[A-Z]*.js',
  webpackConfig: require('./config/webpack.config.dev.js'),
  ignore: ['**/*.{style,test}.js']

}
