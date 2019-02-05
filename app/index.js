const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const usersRouter = require('./users/routes')
const ordersRouter = require('./orders/routes')
const orderItemsRouter = require('./orderItems/routes')
const receiptsRouter = require('./receipts/routes.js')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
      extended: true,
  })
)

app.set('view engine', 'pug')

// General 
app.get('/', (request, response) => {
  response.json({ info: 'Welcome to The Store!'})
})

// Routers
app.use('/users', usersRouter)
app.use('/orders', ordersRouter)
app.use('/orders', orderItemsRouter)
app.use('/orders', receiptsRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
