const pool = require('./db')

const getItems = (request, response) => {
  pool.query('SELECT * FROM items ORDER BY id ASC', (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getItemById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM items WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getItems,
  getItemById,
}
