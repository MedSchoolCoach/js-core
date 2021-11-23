const Model = require('./Model')

class User extends Model {
  /**
   * @param {string} id
   * @param {string} email
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} picture
   * @param {[]} role
   */
  constructor ({ id, email, firstName, lastName, picture, role } = {}) {
    super(id)
    this._email = email
    this._firstName = firstName
    this._lastName = lastName
    this._picture = picture
    this.role = role
  }
}

Object.defineProperties(User.prototype, {
  id: {
    get: function () {
      return this._id
    }
  },
  /**
   * @type {string}
   */
  email: {
    get: function () {
      return this._email
    }
  },

  /**
   * @type {string}
   */
  firstName: {
    get: function () {
      return this._firstName
    }
  },

  /**
   * @type {string}
   */
  lastName: {
    get: function () {
      return this._lastName
    }
  },

  /**
   * @type {string}
   */
  picture: {
    get: function () {
      return this._picture
    }
  },

  /**
   * @type {[]}
   */
  role: {
    get: function () {
      return this._role
    }
  }
})

module.exports = User
