const msc = require('@medschoolcoach/js-core')
const axios = require('axios')

export default async (ctx, inject) => {
  const options = JSON.parse('<%= JSON.stringify(options) %>')

  // Create and run auth setup
  ctx.$authClient = msc.authClient.create(options)
  await ctx.$authClient.init()
  const token = await ctx.$authClient.getToken()

  // http instance for app services
  ctx.$httpClient = axios.create({
    baseURL: options.apiBase,
    headers: Object.assign({}, setAuthHeader(token))
  })

  // User API profile service
  ctx.$profileService = msc.services.profileService(
    msc.createPromiseHandler,
    axios.create({
      baseURL: options.userApiBase,
      headers: Object.assign({}, setAuthHeader(token))
    })
  )

  // promise handler for general use
  ctx.$createPromiseHandler = msc.createPromiseHandler.bind(ctx.$httpClient)

  // Inject globals
  inject('authClient', ctx.$authClient)
  inject('createPromiseHandler', ctx.$createPromiseHandler)
  inject('profileService', ctx.$profileService)
}

/**
 * @param {string} token
 * @return {{Authorization: string}}
 */
function setAuthHeader (token) {
  return {
    Authorization: `Bearer ${token ?? this.token}`
  }
}
