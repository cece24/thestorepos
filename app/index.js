const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const usersRouter = require('./users/routes')

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
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
