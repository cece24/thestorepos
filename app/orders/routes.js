const express = require('express')
const router = express.Router()

const orders = require('./orders')

router.get('/', (req, res, next) => {
  try {
    orders.getOrders()
      .then(data => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved all orders.'
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
  }
})

router.get('/:orderId', (req, res, next) => {
  const orderId = req.params.orderId
  try {
    orders.getOrderById(orderId)
      .then(data => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: `Retrieved order with ID: ${orderId}.`
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
    }
})

router.post('/', (req, res, next) => {
  const {
    user_id,
    total,
    payment_method_id,
  } = req.body
  try {
    orders.createOrder(user_id, total, payment_method_id)
      .then(data => {
        res.status(201)
          .json({
            status: 'success',
            data: data,
            message: `Successfully created order.`
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
    }
})

router.put('/:orderId', (req, res, next) => {
  const orderId = req.params.orderId
  const {
    total,
    payment_method_id,
    points_earned,
  } = req.body
  try {
    orders.updateOrder(orderId, total, payment_method_id, points_earned)
      .then(data => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: `Successfully updated order with ID: ${orderId}.`
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
    }
})

module.exports = router
