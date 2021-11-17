const userTransform = require('./../transforms/user.transform')
const requestFactory = require('./../core/PromiseHandler')

const path = 'profile'

const userService = function () {
  return {
    get: function (callback = null) {
      return requestFactory({
        method: 'get',
        path,
        transform: userTransform,
        callback
      })
    }
  }
}

module.exports = userService
