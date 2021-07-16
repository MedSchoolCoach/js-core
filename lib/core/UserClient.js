const axios = require('axios')
const resources = require('./resources')

class UserClient {
    constructor(config) {
        this.token = config.authToken

        this.httpClient = axios.create({
            baseURL: config.baseUrl,
            headers: Object.assign({}, this._authHeader(this.token)),
        });
    }

    /**
     * Set new token before user requests
     * Example: $user.setToken(...).get()
     *
     * @param token
     * @returns {UserClient}
     */
    setToken(token) {
        this.token = token
        Object.assign(this.httpClient.defaults.headers, this._authHeader(token))

        return this
    }

    get() {
        return this.httpClient.get(resources.user).then(res => res.data);
    }

    update(user) {
        return this.httpClient.put(resources.user, user).then(res => res.data);
    }

    getPurchases() {
        return this.httpClient.get(resources.purchase.getAll).then(res => res.data);
    }

    /**
     * Generate auth headers via token
     *
     * @param token
     * @returns {{Authorization: string}}
     * @private
     */
    _authHeader(token = null) {
        return {
            Authorization: `Bearer ${token ?? this.token}`,
        }
    }
}

module.exports = UserClient;
