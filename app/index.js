const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const users = require('./users')
const items = require('./items')
const paymentMethods = require('./payment-methods')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
      extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Welcome to The Store!'})
})

app.get('/users', users.getUsers)
app.get('/users/:id', users.getUserById)

app.get('/items', items.getItems)
app.get('/items/:id', items.getItemById)

app.get('/paymentmethods', paymentMethods.getPaymentMethods)
app.get('/paymentmethods/:id', paymentMethods.getPaymentMethodById)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
