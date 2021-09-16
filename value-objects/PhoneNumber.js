const phoneHelpers = require('./../helpers/phone-format')

// TODO handling for international

class PhoneNumber {
  /**
   * @param {string} number
   */
  constructor (number) {
    this._number = number
  }

  /**
   * @return {string}
   */
  get number () {
    return this._number
  }

  /**
   * @return {number|null}
   */
  get int () {
    return phoneHelpers.phoneToInt(this._number)
  }

  /**
   * @return {string}
   */
  get display () {
    return phoneHelpers.formatPhoneNumber(this._number)
  }
}

module.exports = PhoneNumber