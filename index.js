const UserClient = require('./lib/core/UserClient')

const userClient = {
    create: function (config) {
        return new UserClient(config)
    }
}

module.exports = userClient
module.exports.default = userClient
