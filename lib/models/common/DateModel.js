const moment = require('moment')
const timeHelpers = require('../../helpers/timeHelpers')

export class DateModel {
  constructor (date = new Date()) {
    this._date = date
  }
}

Object.defineProperties(DateModel.prototype, {
  date: {
    get: function () {
      return this._date
    }
  },

  display: {
    get: function () {
      return moment(timeHelpers.removeTimeFromDate(this._date)).format(
        'MM/DD/YYYY'
      )
    }
  },

  api: {
    get: function () {
      return moment(timeHelpers.removeTimeFromDate(this._date)).format(
        'YYYY-MM-DD'
      )
    }
  },

  noTime: {
    get: function () {
      return timeHelpers.removeTimeFromDate(this._date)
    }
  },

  sortable: {
    get: function () {
      if (!this._date) {
        return null
      }

      return parseInt(
        moment(timeHelpers.removeTimeFromDate(this._date)).format('YYYYMMDD')
      )
    }
  }
})

module.exports = DateModel
