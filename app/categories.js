const db = require('./queries')

const getCategories = async() => {
  return await db.any('SELECT * FROM categories ORDER BY id ASC')
}

module.exports = {
  getCategories,
}
