const { startDevServer } = require('@cypress/webpack-dev-server')
const webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = (on, config) => {
  return Object.assign({}, config, {
    fixturesFolder: 'cypress/fixtures',
    supportFile: 'cypress/support/index.js'
  })
}