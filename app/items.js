const db = require('./queries')

const getItems = async() => {
  return await db.any('SELECT * FROM items ORDER BY id ASC')
}

const getItemById = async(id) => {
  return await db.any('SELECT * FROM items WHERE id = $1', [id])
}

module.exports = {
  getItems,
  getItemById,
}
