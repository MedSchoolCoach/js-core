const HttpRequest = require("./HttpRequest");

/**
 * @param {string} method
 * @param {string} url
 * @param {Object} params
 * @param {?function} callback
 * @param {?function} transform
 * @param {?Object} query
 * @return {PromiseHandler}
 */
function createPromiseHandler({
  method,
  path,
  params = {},
  callback = null,
  transform = (d) => d,
  query,
}) {
  return new PromiseHandler({
    method,
    path,
    params,
    transform,
    callback,
    httpClient: this,
    query,
  });
}

class PromiseHandler {
  /**
   * @param {function} call
   * @param {Object} params
   * @param {?function} transform
   * @param {?function} callback
   * @param {?Object} query
   */
  constructor({
    method,
    path,
    params,
    transform,
    callback,
    httpClient,
    query,
  }) {
    this.errors = [];
    this.success = null;
    this.loading = true;
    this.data = null;
    this.transform = transform;
    this.params = params;
    this.query = query;
    this.httpRequest = new HttpRequest(method, path, params, httpClient, query);
    if (callback) {
      this.callback = callback;
    } else {
      this.callback = () => {};
    }

    this.run().then(() => {
      this.runCallback();
    });
  }

  /**
   * @return {Promise<null>}
   */
  async run() {
    this.loading = true;
    try {
      const response = await this.call();
      this.data = this.transform(response.data);
      this.loading = false;
      this.success = true;
      return this.data;
    } catch (e) {
      this.success = false;
      if (!e.response || !e.response.data) {
        this.errors = e;
        return;
      }

      // Use provided 422 validation errors if available
      if (e.response.data.errors) {
        this.errors = Object.values(e.response.data.errors);
        return;
      }

      // General errors not in errors array (authentication etc)
      if (e.response.data.message) {
        this.errors = e.response.data.message;
        return;
      }

      // Catch all for other errors
      this.errors = Object.values(e.response.data);
    }
  }

  /**
   * @return {Promise}
   */
  call() {
    return this.httpRequest.call();
  }

  /**
   * @param data
   * @return {[]|*}
   */
  transform(data) {
    if (Array.isArray(data)) {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        result.push(this.transform(data[i]));
      }

      return result;
    }

    return this.transform(data);
  }

  /**
   * @return {*}
   */
  runCallback() {
    return this.callback(this);
  }

  /**
   * @return {string}
   */
  getErrorsAsList() {
    if (!Array.isArray(this.errors)) {
      return String(this.errors);
    }

    const result = this.errors.join("<br>");
    if (result) {
      return result;
    }

    return this.error;
  }
}

module.exports = createPromiseHandler;
