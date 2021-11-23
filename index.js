const AuthClient = require('./lib/core/auth')
const createPromiseHandler = require('./lib/core/PromiseHandler')
const services = require('./lib/services/services')
const models = require('./lib/models/models')
const helpers = require('./lib/helpers/helpers')
const transforms = require('./lib/transforms/transforms')

const authClient = {
  create: function (config) {
    return new AuthClient(config)
  }
}

const ex = {
  authClient,
  createPromiseHandler,
  services,
  models,
  transforms,
  helpers
}

module.exports = ex
module.exports.default = ex
