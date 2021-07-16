import userClient from '@medschoolcoach/user-js-sdk/lib/user-client'

export default function (ctx, inject) {
    const options = JSON.parse('<%= JSON.stringify(options) %>')

    ctx.$userClient = userClient.create(options)
    inject('userClient', ctx.$userClient)
}
