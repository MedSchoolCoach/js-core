const Model = require('./Model')

class Purchase extends Model {
  /**
   * @param {string} id
   * @param {number} productId
   * @param {string} productName
   * @param {number} quantity
   * @param {string} cost
   * @param {string} orderDate
   * @param {string} billingEmail
   * @param {string} billingFirstName
   * @param {string} billingLastName
   */
  constructor ({
    id,
    productId,
    productName,
    quantity,
    cost,
    orderDate,
    billingEmail,
    billingFirstName,
    billingLastName
  }) {
    super(id)
    this._productId = productId
    this._productName = productName
    this._quantity = quantity
    this._cost = cost
    this._orderDate = orderDate
    this._billingEmail = billingEmail
    this._billingFirstName = billingFirstName
    this._billingLastName = billingLastName
  }
}

Object.defineProperties(Purchase.prototype, {
  productId: {
    get: function () {
      return this._productId
    }
  },
  productName: {
    get: function () {
      return this._productName
    }
  },
  quantity: {
    get: function () {
      return this._quantity
    }
  },
  cost: {
    get: function () {
      return this._cost
    }
  },
  orderDate: {
    get: function () {
      return this._orderDate
    }
  },
  billingEmail: {
    get: function () {
      return this._billingEmail
    }
  },
  billingFirstName: {
    get: function () {
      return this._billingFirstName
    }
  },
  billingLastName: {
    get: function () {
      return this._billingLastName
    }
  }
})

module.exports = Purchase
