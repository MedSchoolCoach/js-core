const purchaseTransform = require('./../transforms/purchase.transform')

const path = 'purchases'

const purchaseService = (createPromiseHandler, httpClient) => {
  return {
    all: function (callback = null) {
      return createPromiseHandler({
        path: path,
        method: 'get',
        transform: purchaseTransform,
        httpClient,
        callback
      })
    }
  }
}

module.exports = purchaseService
