const db = require('../queries')

const getOrders = async() => {
  return await db.any('SELECT * FROM orders ORDER BY id ASC')
}

const getOrderById = async(id) => {
  return await db.any('SELECT * FROM orders WHERE id = $1', [id])
}

const createOrder = async(user_id, total, payment_method_id) => {
  return await db.one(
    'INSERT INTO orders (user_id, total, payment_method_id) VALUES ($1, $2, $3) RETURNING id',
    [user_id, total, payment_method_id]
  )
}

const updateOrder = async(id, total, payment_method_id, points_earned) => {
  return await db.any(
    'UPDATE orders SET total = $1, payment_method_id = $2, points_earned = $3 WHERE id = $4', 
    [total, payment_method_id, points_earned, id]
  )
}

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
}
