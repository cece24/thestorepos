require('dotenv').config()

const promise = require('bluebird')

const initOptions = {
  promiseLib: promise
}

const cn = {
  user: process.env.DB_USERNAME,
  host: 'localhost',
  database: 'thestore_cece',
  password: process.env.DB_PASSWORD,
  port: 5432,
}

const pgp = require('pg-promise')(initOptions);
const db = pgp(cn)

module.exports = db