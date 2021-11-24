const userProfileTransform = require('./../transforms/user.transform')

const path = 'profile'

const profileService = (createPromiseHandler, httpClient) => {
  return {
    /**
     * @param callback
     * @returns {createPromiseHandler}
     */
    get: function (callback = null) {
      return createPromiseHandler({
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
     * @returns {createPromiseHandler}
     */
    update: function (user, callback = null) {
      return createPromiseHandler({
        method: 'put',
        path,
        callback,
        httpClient
      })
    }
  }
}

module.exports = profileService
