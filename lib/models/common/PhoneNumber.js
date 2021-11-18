const phoneHelpers = require('./../../helpers/phone-format')

export class PhoneNumber {
  /**
   * @param {string} number
   */
  constructor (number) {
    this._number = number
  }
}

Object.defineProperties(PhoneNumber.prototype, {
  number: {
    get: function () {
      return this._number
    }
  },

  int: {
    get: function () {
      return phoneHelpers.toInt(this._number)
    }
  },

  display: {
    get: function () {
      return phoneHelpers.format(this._number)
    }
  }
})

module.exports = PhoneNumber
