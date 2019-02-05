const db = require('./queries')

const getPaymentMethods = async() => {
  return await db.any('SELECT * FROM payment_methods ORDER BY id ASC')
}

const getPaymentMethodById = async(id) => {
  return await db.any('SELECT * FROM payment_methods WHERE id = $1', [id])
}

module.exports = {
  getPaymentMethods,
  getPaymentMethodById,
}
