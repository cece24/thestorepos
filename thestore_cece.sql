DROP DATABASE IF EXISTS thestore_cece;
CREATE DATABASE thestore_cece;

\c thestore_cece;

/* Users Table */
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR UNIQUE
);

INSERT INTO users (first_name, last_name, email)
  VALUES 
    ('Kamila', 'Hahn', 'kamilaisdope@email.com'),
    ('Ariya', 'Blackburn', 'ariyaisalsodope@email.com');


/* Categories Table */
CREATE TABLE categories (
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

INSERT INTO categories (name)
  VALUES
    ('Produce'),
    ('Bakery'),
    ('Grocery'),
    ('Meat');


/* Items Table */
CREATE TABLE items (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  price DECIMAL,
  category_id INTEGER REFERENCES categories (id)
);

INSERT INTO items (name, price, category_id)
  VALUES
    ('Apricot', '1.50', '1'),
    ('Mango', '2.50', '1'),
    ('Sesame Bagel', '0.50', '2'),
    ('Croissant', '1.50', '2'),
    ('Chips', '4.00', '3'),
    ('Granola Bar', '3.50', '3'),
    ('Top Sirloin Steak', '10', '4');


/* Payment Methods Table */
CREATE TABLE payment_methods (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  points_per_dollar DECIMAL
);

INSERT INTO payment_methods (name, points_per_dollar)
  VALUES
    ('Cash', '0.5'),
    ('Debit Card', '0.5'),
    ('Credit Card', '0.5'),
    ('The Store Gold Card', '1'),
    ('The Store Platinum Card', '1.5');


/* Orders Table */
CREATE TABLE orders (
  ID SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  total DECIMAL,
  payment_method_id INTEGER REFERENCES payment_methods (id),
  points_earned INTEGER
);

INSERT INTO orders (user_id, total, payment_method_id, points_earned)
  VALUES
    ('1', '22.50', '4', '23');


/* Order Items Table */
CREATE TABLE order_items (
  ID SERIAL PRIMARY KEY,
  item_id INTEGER REFERENCES items (id),
  quantity INTEGER,
  order_id INTEGER REFERENCES orders (id)
);

INSERT INTO order_items (item_id, quantity, order_id)
  VALUES
    ('1', '2', '1'),
    ('2', '1', '1'),
    ('6', '2', '1'),
    ('7', '1', '1');
