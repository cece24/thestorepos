const express = require('express')
const router = express.Router()

const receipts = require('./receipts')

router.get('/:orderId/receipt', (req, res, next) => {
  const orderId = req.params.orderId
  try {
    receipts.getReceipt(orderId)
      .then(data => {
        res.status(200)
          .render('receipt', {
              data
            }
          )
      })
  } catch(err) {
      console.log(err)
      next(err)
  }
})

module.exports = router
