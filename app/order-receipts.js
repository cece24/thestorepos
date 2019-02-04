const async = require('async')
const pool = require('./db')

const users = require('./users')
const items = require('./items')
const paymentMethods = require('./payment-methods')
const categories = require('./categories')
const orders = require('./orders')
const orderItems = require('./order-items')
const orderReceipts = require('./order-receipts')

// ======
// BAKERY
// 1 Bread $2.50
						
// PRODUCE
// 2 Oranges $3.00
						
// Total: $5.50
						
// Payment method: Cash 
// The Store Points earned: 3 
// ======

const getOrderReceipt = (request, response, next) => {
  const orderId = parseInt(request.params.orderId)
  // 1. Get Order Items

  // const orderItemsSql = "
  // SELECT order_items.id, items.name, items.price, order_items.quantity, 
  // categories.name as category_name, items.price * order_items.quantity as item_total
  // FROM order_items
  // LEFT JOIN items ON order_items.id = items.id
  // LEFT JOIN categories ON items.category_id = categories.id
  // WHERE order_items.order_id = $1
  // "

}
// 2. Sort Order Items by Category
// 3. Get Category Names
// 4. Get Order Item Quantity
// 5. Get Item Names (pluralization?!)
// 6. Get Item Prices
// 7. Get Order Item Quantity
// 8. Calculate Quantity * Item Price'


// 9. Calculate Order Total
// 10. Post/Put Total to Order
// 11. Get Order Payment Method
// 12. Get Payment Method Name
// 13. Calculate The Store Points earned, depending
//     on Payment Method
// 14. Post/Put Points Earned to Order
// 15. Send all info in receipt

module.exports = {
  getOrderReceipt
}
