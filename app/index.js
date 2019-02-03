const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const users = require('./users')
const items = require('./items')

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

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
