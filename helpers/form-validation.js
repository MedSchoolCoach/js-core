function email(val) {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(val) || 'Invalid email'
}

function phone(val) {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
  return pattern.test(val) || 'Invalid phone number'
}

function zip(val) {
  const pattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/
  return pattern.test(val) || 'Invalid zip code'
}

module.exports.email = email
module.exports.phone = phone
module.exports.zip = zip