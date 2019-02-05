# The Store POS
*Cecilia Wong*

## Project Setup

1. Database:
`psql -d postgres -f thestore_cece.sql -U <user_name>`

This command will add a database with tables for:
* users
* items
* categories
* payment_methods
* orders
* order_items

2. In the cloned repo, open the `.sample.env` file and enter your Postgres user credentials 

3. Rename the file `.sample.env` to `.env`

4. `npm install`

## Receipt Printout

Order ID 1 has been set up with dummy data to show a receipt printout:
`http://localhost:3000/orders/1/receipt`

## Run Tests
`./node_modules/mocha/bin/mocha "app/**/*.test.js"`

## Project Planning
* Rough reference document used for planning and design [here.](https://docs.google.com/document/d/1ijbDgIWEwX8siLl8S8Gw4U38YnA1gRDcmGQgRAdmcpA/edit?usp=sharing)
