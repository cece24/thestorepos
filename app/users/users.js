const db = require('../queries')

const getUsers = async() => {
  return await db.any('SELECT * FROM users ORDER BY id ASC')
}

const getUserById = async(id) => {
  return await db.any('SELECT * FROM users WHERE id = $1', [id])
}

module.exports = {
  getUsers,
  getUserById,
}
