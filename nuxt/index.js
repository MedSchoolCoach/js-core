const path = require('path')

function UserApi(_moduleOptions) {
    this.addPlugin({
        src: path.resolve(__dirname, 'userApiPlugin.js'),
        options: Object.assign({}, this.options.userApiSdk ?? {})
    })
}

module.exports = UserApi
module.exports.meta = require('../package.json')
