const timeHelpers = require('./../../helpers/time-format')

export class Minutes {
  constructor (minutes = 0) {
    this._minutes = parseInt(minutes)
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
