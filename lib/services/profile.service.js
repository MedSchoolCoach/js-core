const userProfileTransform = require('./../transforms/user.transform')

const path = 'profile'

const profileService = (PromiseHandler, httpClient) => {
  return {
    /**
     * @param callback
     * @returns {PromiseHandler}
     */
    get: function (callback = null) {
      return new PromiseHandler({
        method: 'get',
        transform: userProfileTransform,
        path,
        callback,
        httpClient
      })
    },

    /**
     * @param {User} user
     * @param {function} callback
     * @returns {PromiseHandler}
     */
    update: function (user, callback = null) {
      return new PromiseHandler({
        method: 'put',
        path,
        callback,
        httpClient
      })
    }
  }
}

module.exports = profileService
