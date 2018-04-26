const baseConfig = require('./webpack.config.base')

const config = {
  ...baseConfig,
  mode: 'development',
  devtool: 'source-map',
  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules
    ]
  },
  plugins: [
    ...baseConfig.plugins
  ]
}

module.exports = config
