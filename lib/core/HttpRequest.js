class HttpRequest {
  _allowMethods = ['get', 'put', 'post', 'patch', 'delete']
  /**
   * @param {string} method
   * @param {string} url
   * @param {httpClient} httpClient
   */
  constructor (method, url, params, httpClient) {
    if (!this._allowMethods.includes(method)) {
      throw 'HttpRequest: Invalid method. Must be get, put, post, patch or delete.'
    }

    this._method = method
    this._url = url
    this._params = params
    this._httpClient = httpClient
  }

  /**
   * @return {HttpRequest.httpClient}
   */
  get httpClient () {
    return this._httpClient
  }

  /**
   * @return {string}
   */
  get method () {
    return this._method
  }

  /**
   * @return {string}
   */
  get url () {
    return this._url
  }

  call() {
    switch (this.method) {
      case 'get':
        return this.httpClient.get(this.url)
      case 'put':
        return this.httpClient.put(this.url, this._params)
      case 'post':
        return this.httpClient.post(this.url, this._params)
      case 'patch':
        return this.httpClient.patch(this.url, this._params)
      case 'delete':
        return this.httpClient.delete(this.url, {
          data: this._params
        })
    }

  }
}

module.exports = HttpRequest