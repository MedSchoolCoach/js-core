const AuthClient = require('./lib/core/auth')
const createPromiseHandler = require('./lib/core/PromiseHandler')
const services = require('./lib/services/services')

const authClient = {
  create: function (config) {
    return new AuthClient(config)
  }
}

const ex = {
  authClient,
  createPromiseHandler,
  services
}

module.exports = ex
module.exports.default = ex
