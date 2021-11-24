const Purchase = require('./../models/Purchase')

const purchaseTransform = function (data) {
  return new Purchase({
    id: data.id,
    productId: data.product_id,
    productName: data.product_name,
    quantity: data.quantity,
    cost: data.cost,
    orderDate: data.order_date,
    billingEmail: data.billing_email,
    billingFirstName: data.billing_first_name,
    billingLastName: data.billing_last_name
  })
}

module.exports = purchaseTransform
