function minutesToTime(data) {
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


const formatSecondsToTime = seconds => {
  const totalMinutes = Math.floor(seconds / 60)
  const h = Math.floor(totalMinutes / 60)
  const m = Math.floor(totalMinutes - h * 60)

  const s = seconds - totalMinutes * 60

  return `${h}:${zeroPad(m)}:${zeroPad(s)}`
}

const zeroPad = num => {
  const zero = 2 - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join('0') + num
}

const formatSecondsToWords = (seconds, displaySeconds = true) => {
  const totalMinutes = Math.floor(seconds / 60)
  const h = Math.floor(totalMinutes / 60)
  const m = Math.floor(totalMinutes - h * 60)
  const s = Math.round(seconds - totalMinutes * 60)

  // Side path for less than 1 hour
  if (h === 0) {
    if (displaySeconds) {
      return `${m} min, ${s} sec`
    } else {
      return `${m} min`
    }
  }

  if (!displaySeconds) {
    return `${h} hrs, ${m} min`
  }

  return `${h} hrs, ${m} min, ${s} sec`
}

module.exports.minutesToTime = minutesToTime
module.exports.formatSecondsToTime = formatSecondsToTime
module.exports.formatSecondsToWords = formatSecondsToWords