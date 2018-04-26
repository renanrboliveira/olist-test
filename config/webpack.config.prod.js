const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const baseConfig = require('./webpack.config.base')

const config = {
  ...baseConfig,
  mode: 'production',

  entry: {
    app: './src/index.js'
  },

  module: {
    ...baseConfig.module,
    rules: [
      ...baseConfig.module.rules
    ]
  },

  plugins: [
    ...baseConfig.plugins,

    new CleanPlugin(['dist'], {
      root: path.join(__dirname, '..')
    }),

    new webpack.DefinePlugin({
      'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV)
    }),

    process.env.BUNDLE_ANALYZER && new BundleAnalyzerPlugin()
  ].filter(Boolean),

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  output: {
    ...baseConfig.output,
    filename: 'js/[name]_[chunkhash].js'
  }
}

module.exports = config
