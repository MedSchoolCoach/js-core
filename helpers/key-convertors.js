/**
 * @param str
 * @return {*}
 */
const strSnakeToCamel = str =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  ).replace('-', '').replace('_','')

/**
 * @param input
 * @return {{}|*}
 */
const keysToCamel = input => {
  if (isObject(input)) {
    const newObject = {}

    Object.keys(input).forEach(k => {
      newObject[strSnakeToCamel(k)] = keysToCamel(input[k])
    })

    return newObject
  }

  return input
}

/**
 * @param {Object|String} data string or keys of object are named in form of camel case
 * @param {number} depth to which level of keys should it process
 * @return {Object|String} string or keys of object are named in form of snake
 */
const keysToSnake = (data, depth = 1) => {
  if (!isObject(data))
    return data

  return _processKeys(data, _snakelize, depth)
}

// snakelize a string formed in underscore
function _snakelize(key) {
  const separator = '_'
  const split = /(?=[A-Z])/

  return key
    .split(split)
    .join(separator)
    .toLowerCase()
}

// camelize/snakelize keys of an object
// @param {number} depth to which level of keys should it process
function _processKeys(obj, processer, depth) {
  if (depth === 0) {
    return obj
  }

  const result = {}
  const keys = Object.keys(obj)

  for (let i = 0; i < keys.length; i++) {
    result[processer(keys[i])] = _processKeys(
      obj[keys[i]],
      processer,
      depth - 1
    )
  }

  return result
}

const isObject = function (o) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function'
}

const isArray = function (a) {
  return Array.isArray(a)
}

/**
 * @param data
 * @return {string|{}|*}
 */
const removeInitialUnderscores = data => {
  if (isObject(data)) {
    const n = {}

    Object.keys(data).forEach(k => {
      if (k.startsWith('_')) {
        n[k.substring(1)] = removeInitialUnderscores(data[k])
      }
    })

    return n
  }

  if (isArray(data)) {
    return data.map(i => {
      return removeInitialUnderscores(i)
    })
  }

  if (data.startsWith('_')) {
    return data.substring(1)
  }

  return data
}

module.exports.keysToCamel = keysToCamel
module.exports.keysToSnake = keysToSnake
module.exports.removeInitialUnderscores = removeInitialUnderscores