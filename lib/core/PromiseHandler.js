class PromiseHandler {
  /**
   * @param {function} call
   * @param {Object} params
   * @param {function} transform
   * @param {?function} callback
   */
  constructor({call, params = {}, callback = null, transform = d => d}) {
    this._call = call
    this._transform = transform
    this._params = params
    if (callback) {
      this._callback = callback
    }

    this.run().then(() => {
      this.runCallback()
    })
  }

  /**
   * @private
   * {boolean}
   */
  _success

  /**
   * @return {boolean}
   */
  get success() {
    return this._success
  }

  /**
   * @type {null}
   * @private
   */
  _data = null

  get data() {
    return this._data
  }

  /**
   * @type {[]}
   * @private
   */
  _errors = []

  get errors() {
    return this._errors
  }

  /**
   * @type {boolean}
   * @private
   */
  _loading = true

  /**
   * @return {boolean}
   */
  get loading() {
    return this._loading
  }

  /**
   * @return {Object}
   */
  get params() {
    return this._params
  }

  /**
   * @private
   * {function}
   */
  _callback = () => {
  }

  /**
   * @return {Promise<null>}
   */
  async run() {
    this._loading = true
    try {
      const response = await this.call()
      this._data = this.transform(response.data)
      this._loading = false
      this._success = true
      return this._data
    } catch (e) {
      this._success = false
      if (!e.response || !e.response.data) {
        this._errors = e
        return
      }

      // Use provided 422 validation errors if available
      if (e.response.data.errors) {
        this._errors = Object.values(e.response.data.errors)
        return
      }

      // General errors not in errors array (authentication etc)
      if (e.response.data.message) {
        this._errors = e.response.data.message
        return
      }

      // Catch all for other errors
      this._errors = Object.values(e.response.data)
    }
  }

  /**
   * @return {Promise}
   */
  call() {
    return this._call(this.params)
  }

  /**
   * @param data
   * @return {[]|*}
   */
  transform(data) {
    if (Array.isArray(data)) {
      const result = []
      for (let i = 0; i < data.length; i++) {
        result.push(this._transform(data[i]))
      }

      return result
    }

    return this._transform(data)
  }

  /**
   * @return {*}
   */
  runCallback() {
    return this._callback(this)
  }

  /**
   * @return {string}
   */
  getErrorsAsList() {
    if (!Array.isArray(this._errors)) {
      return String(this._errors)
    }

    const result = this._errors.join('<br>')
    if (result) {
      return result
    }

    return this._error
  }
}

module.exports = PromiseHandler