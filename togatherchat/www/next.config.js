const path = require('path')
const fs = require('fs')

let sharedPath = path.resolve(__dirname, '../shared/')
try {
  if (!fs.existsSync(sharedPath)) {
    sharedPath = path.resolve(__dirname, '../../shared/')
  }
} catch (__) {}

module.exports = {
  target: 'serverless',
  env: {
    ROOT_URL: process.env.ROOT_URL
  },
  webpack (config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      // components: path.resolve(__dirname, 'components/'),
      // views: path.resolve(__dirname, 'views/'),
      // lib: path.resolve(__dirname, 'lib/'),
      shared: sharedPath
    }
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, 'node_modules'),
      'node_modules'
    ]
    return config
  }
}
