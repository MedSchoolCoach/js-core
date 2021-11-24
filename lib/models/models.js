const User = require('./User')
const DateModel = require('./common/DateModel')
const Minutes = require('./common/Minutes')
const PhoneNumber = require('./common/PhoneNumber')
const Purchase = require('./Purchase')

const models = {
  createUser,
  createDate,
  createMinutes,
  createPhoneNumber,
  createPurchase
}

/**
 * @param data
 * @returns {User}
 */
function createUser (data) {
  return new User(data)
}

/**
 * @param {Date} data
 * @returns {DateModel}
 */
function createDate (data = new Date()) {
  return new DateModel(data)
}

/**
 * @param {Number} data
 * @returns {Minutes}
 */
function createMinutes (data = 0) {
  return new Minutes(parseInt(data))
}

/**
 * @param data
 * @returns {PhoneNumber}
 */
function createPhoneNumber (data) {
  return new PhoneNumber(data)
}

/**
 * @param data
 * @returns {Purchase}
 */
function createPurchase (data) {
  return new Purchase(data)
}

models.exports = models
