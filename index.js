const UserClient = require('./lib/core/UserClient');
const AuthClient = require('./lib/core/auth');
const PromiseHandler = require('./lib/core/PromiseHandler')

const userClient = {
    create: function (config) {
        return new UserClient(config)
    }
}

const authClient = {
    create: function(config) {
        return new AuthClient(config)
    }
}


const ex = {
    userClient,
    authClient,
    PromiseHandler
}

module.exports = ex
module.exports.default = ex