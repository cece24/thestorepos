#The Store POS
*Cecilia Wong*

##Database Setup
`psql -d postgres -f thestore_cece.sql -U <user_name>`

This command will add a database with tables for:
* users
* items
* categories
* payment_methods
* orders
* order_items