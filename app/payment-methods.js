const pool = require('./db')

const getPaymentMethods = (request, response) => {
  pool.query('SELECT * FROM payment_methods ORDER BY id ASC', (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getPaymentMethodById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM payment_methods WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getPaymentMethods,
  getPaymentMethodById,
}
