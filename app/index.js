const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const users = require('./users')

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

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
