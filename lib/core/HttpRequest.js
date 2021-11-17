const allowedMethods = ['get', 'put', 'post', 'patch', 'delete']

class HttpRequest {
  /**
   * @param {string} method
   * @param {string} url
   * @param {httpClient} httpClient
   */
  constructor (method, url, params, httpClient) {
    if (!allowedMethods.includes(method)) {
      throw new Error(
        'HttpRequest: Invalid method. Must be get, put, post, patch or delete.'
      )
    }

    this.method = method
    this.url = url
    this.params = params
    this.httpClient = httpClient
  }

  call () {
    switch (this.method) {
      case 'get':
        return this.httpClient.get(this.url)
      case 'put':
        return this.httpClient.put(this.url, this.params)
      case 'post':
        return this.httpClient.post(this.url, this.params)
      case 'patch':
        return this.httpClient.patch(this.url, this.params)
      case 'delete':
        return this.httpClient.delete(this.url, {
          data: this.params
        })
    }
  }
}

module.exports = HttpRequest
