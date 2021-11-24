const userTransform = require('./user.transform')
const purchaseTransform = require('./purchase.transform')

module.exports = {
  user: userTransform,
  purchase: purchaseTransform
}
