const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const users = require('./users')
const items = require('./items')
const paymentMethods = require('./payment-methods')
const categories = require('./categories')
const orders = require('./orders')
const orderItems = require('./order-items')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
      extended: true,
  })
)

// General 
app.get('/', (request, response) => {
  response.json({ info: 'Welcome to The Store!'})
})

// Users
app.get('/users', users.getUsers)
app.get('/users/:id', users.getUserById)

// Items
app.get('/items', items.getItems)
app.get('/items/:id', items.getItemById)

// Payment Methods
app.get('/paymentmethods', paymentMethods.getPaymentMethods)
app.get('/paymentmethods/:id', paymentMethods.getPaymentMethodById)

// Categories
app.get('/categories', categories.getCategories)
app.get('/categories/:id', categories.getCategoryById)

// Orders
app.get('/orders', orders.getOrders)
app.get('/orders/:id', orders.getOrderById)
app.post('/orders', orders.createOrder)
app.put('/orders/:orderId', orders.updateOrder)

// User Orders
app.get('/users/:userId/orders', orders.getOrdersByUserId)
app.post('/users/:userId/orders', orders.createUserOrder)
app.put('/users/:userId/orders/:orderId', orders.updateUserOrder)

// Order Items
app.get('/orderitems', orderItems.getOrderItems)
app.get('/orders/:orderId/items', orderItems.getOrderItemsByOrderId)
app.post('/orders/:orderId/items', orderItems.createOrderItem)
app.put('/orders/:orderId/items/:orderItemId', orderItems.updateOrderItemQuantity)
app.delete('/orders/:orderId/items/:orderItemId', orderItems.deleteOrderItem)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
