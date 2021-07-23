const timeHelper = require('./../helpers/time-format')

class MinutesObject {
  constructor (minutes = 0) {
    this._minutes = parseInt(minutes)
  }

  /**
   * @return {number}
   */
  get minutes () {
    return this._minutes
  }

  /**
   * @param {Number} val
   * @return {*}
   */
  set minutes (val) {
    return (this._minutes = val)
  }

  /**
   * @return {string}
   */
  get time () {
    return timeHelper.minutesToTime(this.minutes)
  }

  /**
   * @return {number}
   */
  get hours () {
    return Math.round(this.minutes / 6) / 10
  }
}

module.exports = MinutesObject