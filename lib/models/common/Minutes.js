const timeHelpers = require('./../../helpers/time-format')

class Minutes {
  constructor (minutes) {
    this._minutes = minutes
  }
}

Object.defineProperties(Minutes.prototype, {
  minutes: {
    get: function () {
      return this._minutes
    }
  },
  time: {
    get: function () {
      return timeHelpers.minutesToTime(this._minutes)
    }
  },
  hours: {
    get: function () {
      return (this._minutes / 60).toFixed(2)
    }
  }
})

module.exports = Minutes
