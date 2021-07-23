/**
 * @param n
 * @return {string}
 */
function getNumberWithOrdinal (n) {
  const options = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return `${n}${options[(v - 20) % 10] || options[v] || options[0]}`
}

module.exports.getNumberWithOrdinal = getNumberWithOrdinal