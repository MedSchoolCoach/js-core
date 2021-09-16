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