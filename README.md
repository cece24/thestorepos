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
