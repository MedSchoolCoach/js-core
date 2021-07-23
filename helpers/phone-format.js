/**
 * @param phoneNumberString
 * @return {string|*}
 */
function formatPhoneNumber (phoneNumberString) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    const intlCode = match[1] ? '+1 ' : ''
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }

  // if fails return unformatted
  return phoneNumberString
}

/**
 * @param {string|number} val
 * @return {number|null}
 */
function phoneToInt (val) {
  if (!val) {
    return null
  }

  if (Number.isInteger(val)) {
    return val
  }

  val = val.replace(/\(/g, '')
  val = val.replace(/\)/g, '')
  val = val.replace(/ /g, '')
  val = val.replace(/-/g, '')
  return parseInt(val)
}

module.exports.formatPhoneNumber = formatPhoneNumber
module.exports.phoneToInt = phoneToInt
