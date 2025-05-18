CREATE USER ecommerceapp WITH PASSWORD 'ecommerceapp';

GRANT ALL PRIVILEGES ON DATABASE "ecommerce" TO ecommerceapp;

-- No need to set authentication plugin for PostgreSQL