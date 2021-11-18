const User = require('./User')
const DateModel = require('./common/DateModel')
const Minutes = require('./common/Minutes')
const PhoneNumber = require('./common/PhoneNumber')

const models = {
  User,
  DateModel,
  Minutes,
  PhoneNumber
}

models.exports = models
