const express = require('express')
const router = express.Router()

const users = require('./users')

router.get('/', (req, res, next) => {
  try {
    users.getUsers()
      .then(data => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved all users.'
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
  }
})

router.get('/:id', (req, res, next) => {
  const userId = req.params.id
  try {
    users.getUserById(userId)
      .then(data => {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved user.'
          })
      })
  } catch(err) {
      console.log(err)
      next(err)
    }
})

module.exports = router
