const userClient = require('@medschoolcoach/user-js-sdk')

export default (ctx, inject) => {
    const options = JSON.parse('<%= JSON.stringify(options) %>')

    ctx.$userClient = userClient.create(options)
    inject('userClient', ctx.$userClient)
}
