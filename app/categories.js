const pool = require('./db')

const getCategories = (request, response) => {
  pool.query('SELECT * FROM categories ORDER BY id ASC', (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCategoryById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM categories WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getCategories,
  getCategoryById,
}
