function minutesToTime (data) {
  if (parseInt(data) === 0) {
    return '0:00'
  }

  const neg = data >= 0 ? '' : '-'
  const time = parseInt(data)
  const hours = Math.abs(Math.trunc(time / 60))
  const minutes = Math.abs(time % 60)
  const stringHours = hours.toString()
  let stringMinutes = minutes.toString()

  if (stringMinutes.length === 1) {
    stringMinutes = '0' + stringMinutes
  }

  return neg + stringHours + ':' + stringMinutes
}

module.exports = {
  minutesToTime
}
