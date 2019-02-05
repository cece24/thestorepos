const orders = require('../orders/orders')
const orderItems = require('../orderItems/orderItems')
const items = require('../items')
const categories = require('../categories')
const paymentMethods = require('../paymentMethods')

const getReceipt = async(orderId) => {
  const receiptItems = await orderItems.getOrderItemsByOrderId(orderId)
  
  let receiptItemsData = []
  let orderTotal = 0

  const getItemsData = async() => {
    for (const receiptItem of receiptItems) {
      let item = {}
      const itemsData = await items.getItemById(receiptItem.item_id)

      const { name, price, category_id } = itemsData[0]
      item = {
        name,
        price,
        category_id,
        quantity: receiptItem.quantity,
        total: receiptItem.quantity * price,
      }

      receiptItemsData.push(item)
      orderTotal = orderTotal + item.total
    }
  }

  await getItemsData()

  let receiptData = {categories: {}}

  const itemCategories = await categories.getCategories()

  for (const category of itemCategories) {
    let { id, name } = category
    receiptData.categories[id] = {
      name,
      items: [],
    }
  }
  const categorizeItems = () => {

    for (const receiptItemData of receiptItemsData) {
      const categoryId = receiptItemData.category_id
      
      if (categoryId === 1) {
        receiptData.categories['1'].items.push(receiptItemData)
      }
      if (categoryId === 2) {
        receiptData.categories['2'].items.push(receiptItemData)
      }
      if (categoryId === 3) {
        receiptData.categories['3'].items.push(receiptItemData)
      }
      if (categoryId === 4) {
        receiptData.categories['4'].items.push(receiptItemData)
      }
    }
  }

  categorizeItems()

  const orderDetails = await orders.getOrderById(orderId)
  const paymentMethodId = orderDetails[0].payment_method_id
  const paymentMethod = await paymentMethods.getPaymentMethodById(paymentMethodId)
  
  const pointsPerDollar = paymentMethod[0].points_per_dollar
  
  let pointsEarned = 0
  pointsEarned = Math.round(orderTotal * pointsPerDollar)

  receiptData.total = orderTotal
  receiptData.payment_method = paymentMethod[0]
  receiptData.points_earned = pointsEarned

  await orders.updateOrder(orderId, orderTotal, paymentMethodId, pointsEarned)

  return await receiptData
}

module.exports = {
  getReceipt,
}
