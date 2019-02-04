const pool = require('./db')

const getOrders = (request, response) => {
  pool.query('SELECT * FROM orders ORDER BY id ASC', (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOrderById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM orders WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createOrder = (request, response) => {
  const { 
    total,
    payment_method_id,
  } = request.body

  pool.query(
    'INSERT INTO orders (total, payment_method_id) VALUES ($1, $2) RETURNING id',
    [total, payment_method_id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Order created with ID: ${result.rows[0].id}`)
  })
}

const updateOrder = (request, response) => {
  const id = parseInt(request.params.orderId)
  const {
    total,
    payment_method_id,
  } = request.body

  pool.query(
    'UPDATE orders SET total = $1, payment_method_id = $2 WHERE id = $3', 
    [total, payment_method_id, id],
    (error, results) => {
      if (error) {
        throw error
      }
    response.status(200).send(`Order updated with ID: ${id}.`)
  })
}

const getOrdersByUserId = (request, response) => {
  const user_id = parseInt(request.params.userId)

  pool.query(
    'SELECT * FROM orders WHERE user_id = $1',
    [user_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }
  )
}

const createUserOrder = (request, response) => {
  const user_id = parseInt(request.params.userId)
  const { 
    total,
    payment_method_id,
  } = request.body

  pool.query(
    'INSERT INTO orders (user_id, total, payment_method_id) VALUES ($1, $2, $3) RETURNING id',
    [user_id, total, payment_method_id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User order created with ID: ${result.rows[0].id}.`)
  })
}

const updateUserOrder = (request, response) => {
  const id = parseInt(request.params.orderId)
  const {
    total,
    payment_method_id,
    points_earned
  } = request.body

  pool.query(
    'UPDATE orders SET total = $1, payment_method_id = $2, points_earned = $3 WHERE id = $4', 
    [total, payment_method_id, points_earned, id],
    (error, results) => {
      if (error) {
        throw error
      }
    response.status(200).send(`User order updated with ID: ${id}.`)
  })
}

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  getOrdersByUserId,
  createUserOrder,
  updateUserOrder,
}
