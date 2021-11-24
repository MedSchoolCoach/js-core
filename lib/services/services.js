const profileService = require('./profile.service')
const purchaseService = require('./purchase.service')

module.exports = {
  profile: profileService,
  purchase: purchaseService
}
