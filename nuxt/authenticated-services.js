const msc = require('@medschoolcoach/user-js-sdk')
const axios = require('axios')

export default async (ctx, inject) => {
  const options = JSON.parse('<%= JSON.stringify(options) %>')

  // Create and run auth setup
  ctx.$authClient = msc.authClient.create(options)
  await ctx.$authClient.init()
  const token = await ctx.$authClient.getToken()


  // http instance for app services
  ctx.$httpClient = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: Object.assign({}, setAuthHeader(token)),
  })

  // http instance for user client
  const userHttpClient = axios.create({
    baseURL: process.env.USER_API_BASE_URL ?? `https://user-api.medschoolcoach.com`,
    headers: Object.assign({}, setAuthHeader(token))
  })

  // Create user client
  ctx.$userClient = msc.userClient.create(userHttpClient)

  // Inject globals
  inject('httpClient', ctx.$httpClient)
  inject('userClient', ctx.$userClient)
  inject('authClient', ctx.$authClient)
}

/**
 * @param {string} token
 * @return {{Authorization: string}}
 */
function setAuthHeader (token) {
  return {
    Authorization: `Bearer ${token ?? this.token}`,
  }
}