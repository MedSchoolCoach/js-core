const resources = require('./resources')

class UserClient {
  constructor (http) {
    this.httpClient = http
  }

  /**
   * Set new token before user requests
   * Example: $user.setToken(...).get()
   *
   * @param token
   * @returns {UserClient}
   */
  setToken (token) {
    this.token = token
    Object.assign(this.httpClient.defaults.headers, this._authHeader(token))

    return this
  }

  get () {
    return this.httpClient.get(resources.user).then(res => res.data)
  }

  update (user) {
    return this.httpClient.put(resources.user, user).then(res => res.data)
  }

  getPurchases (page = 1) {
    return this.httpClient
      .get(resources.purchase.getAll, { params: { page } })
      .then(res => res.data)
  }
}

module.exports = UserClient
