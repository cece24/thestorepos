const db = require('../queries')

const getOrderItemsByOrderId = async(id) => {
  return await db.any('SELECT * FROM order_items WHERE order_id = $1', [id])
}

const createOrderItem = async(item_id, quantity, order_id) => {
  return await db.any(
    'INSERT INTO order_items (item_id, quantity, order_id) VALUES ($1, $2, $3) RETURNING id',
    [item_id, quantity, order_id]
  )
}

const updateQuantity = async(id, quantity) => {
  return await db.any(
    'UPDATE order_items SET quantity = $1 WHERE id = $2', 
    [quantity, id]
  )
}

const deleteOrderItem = async(id) => {
  return await db.any('DELETE FROM order_items WHERE id = $1',[id])
}

module.exports = {
  getOrderItemsByOrderId,
  createOrderItem,
  updateQuantity,
  deleteOrderItem,
}
