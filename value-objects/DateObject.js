const moment = require('moment')

class DateObject {
  constructor (date = new Date()) {
    this.date = date
  }

  /**
   * @return {Date}
   */
  get date () {
    return this._date
  }

  /**
   * @return {string|null}
   */
  get display () {
    if (!this._date) {
      return null
    }

    return moment(this.noTime).format('MM/DD/YYYY')
  }

  /**
   * @return {string|null}
   */
  get api () {
    if (!this._date) {
      return null
    }

    return moment(this.noTime).format('YYYY-MM-DD')
  }

  /**
   * @return {string|null}
   */
  get noTime () {
    if (!this._date || isNaN(this._date.getTime())) {
      return null
    }

    return this._date.toISOString().substr(0, 10)
  }

  set noTime (val) {
    this._date = new Date(val)
  }

  /**
   * @return {number|null}
   */
  get sortable () {
    if (!this._date) {
      return null
    }

    return parseInt(moment(this.noTime).format('YYYYMMDD'))
  }
}

module.exports = DateObject