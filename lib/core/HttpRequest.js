const allowedMethods = ["get", "put", "post", "patch", "delete"];

class HttpRequest {
  /**
   * @param {string} method
   * @param {string} url
   * @param {Object}  params
   * @param {httpClient} httpClient
   * @param {?Object} query
   */
  constructor(method, url, params, httpClient, query) {
    if (!allowedMethods.includes(method)) {
      throw "HttpRequest: Invalid method. Must be get, put, post, patch or delete.";
    }

    this.method = method;
    this.url = url;
    this.params = params;
    this.httpClient = httpClient;
    this.query = query;
  }

  call() {
    switch (this.method) {
      case "get":
        return this.httpClient.get(this.url, { params: this.query });
      case "put":
        return this.httpClient.put(this.url, this.params, {
          params: this.query,
        });
      case "post":
        return this.httpClient.post(this.url, this.params, {
          params: this.query,
        });
      case "patch":
        return this.httpClient.patch(this.url, this.params, {
          params: this.query,
        });
      case "delete":
        return this.httpClient.delete(this.url, {
          data: this.params,
          params: this.query,
        });
    }
  }
}

module.exports = HttpRequest;
