class Model {
  /**
   * @param {string} id
   */
  constructor (id) {
    this._id = id
  }
}

Object.defineProperties(Model.prototype, {
  /**
   * @type {string}
   */
  id: {
    get: function () {
      return this._id
    }
  }
})

module.exports = Model
