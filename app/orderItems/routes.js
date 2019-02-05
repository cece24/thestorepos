const express = require('express')
const router = express.Router()

const orderItems = require('./orderItems')

router.get('/:orderId/items', (req, res, next) => {
  const orderId = parseInt(req.params.orderId)
  try {
    orderItems.getOrderItemsByOrderId(orderId)
      .then(data => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: `Retrieved order items for order with ID: ${orderId}.`
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
    }
})

router.post('/:orderId/items', (req, res, next) => {
  const orderId = parseInt(req.params.orderId)
  const {
    item_id,
    quantity,
  } = req.body
  try {
    orderItems.createOrderItem(item_id, quantity, orderId)
      .then(data => {
        res.status(201)
          .json({
            status: 'success',
            data: data,
            message: `Successfully created order item.`
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
    }
})

router.put('/:orderId/items/:itemId', (req, res, next) => {
  const itemId = req.params.itemId
  const {
    quantity
  } = req.body
  try {
    orderItems.updateQuantity(itemId, quantity)
      .then(data => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: `Successfully updated order item with ID: ${itemId}.`
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
    }
})

router.delete('/:orderId/items/:itemId', (req, res, next) => {
  const itemId = req.params.itemId
  try {
    orderItems.deleteOrderItem(itemId)
      .then(data => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: `Successfully deleted order item with ID: ${itemId}.`
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
    }
})


module.exports = router
