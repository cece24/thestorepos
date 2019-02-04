const pool = require('./db')

const getOrderItems = (request, response) => {
  pool.query('SELECT * FROM order_items ORDER BY id ASC', (error, results) => {
    if(error) {
      console.log(error)
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOrderItemsByOrderId = (request, response) => {
  const order_id = parseInt(request.params.orderId)

  pool.query('SELECT * FROM order_items WHERE order_id = $1', [order_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createOrderItem = (request, response) => {
  const order_id = parseInt(request.params.orderId)
  const { 
    item_id,
    quantity,
  } = request.body

  pool.query(
    'INSERT INTO order_items (item_id, quantity, order_id) VALUES ($1, $2, $3) RETURNING id',
    [item_id, quantity, order_id],
    (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Order item created with ID: ${result.rows[0].id}`)
  })
}

const updateOrderItemQuantity = (request, response) => {
  const id = parseInt(request.params.orderItemId)
  const {
    quantity
  } = request.body

  pool.query(
    'UPDATE order_items SET quantity = $1 WHERE id = $2', 
    [quantity, id],
    (error, results) => {
      if (error) {
        throw error
      }
    response.status(200).send(`Order item quantity updated with ID: ${id}.`)
  })
}

const deleteOrderItem = (request, response) => {
  const id = parseInt(request.params.orderItemId)

  pool.query('DELETE FROM order_items WHERE id = $1',[id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Order item deleted with ID: ${id}`)
  })
}

module.exports = {
  getOrderItems,
  getOrderItemsByOrderId,
  createOrderItem,
  updateOrderItemQuantity,
  deleteOrderItem,
}
