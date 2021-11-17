const UserClient = require('./lib/core/UserClient')
const AuthClient = require('./lib/core/auth')
const createPromiseHandler = require('./lib/core/PromiseHandler')
const services = require('./lib/services/services')

const userClient = {
  create: function (config) {
    return new UserClient(config)
  }
}

const authClient = {
  create: function (config) {
    return new AuthClient(config)
  }
}

const ex = {
  userClient,
  authClient,
  createPromiseHandler,
  services
}

module.exports = ex
module.exports.default = ex
