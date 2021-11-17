const User = require('./../models/User')

const userProfileTransform = function (data) {
  return new User({
    id: data.id,
    email: data.email,
    phone: data.phone,
    firstName: data.first_name,
    lastName: data.last_name,
    picture: data.picture,
    emailVerified: Boolean(data.email_verified)
  })
}

module.exports = userProfileTransform
