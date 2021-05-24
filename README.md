# E-Commerce Back-End

The purpose of this application is to provide a back-end, including an SQL database, for an e-commerce platform that is able to track products in the catalog, including relating them to specific categories and tags. The application supports all CRUD operations for the management of products, categories, and tags.

The application is built using the following tools & packages:

- MySQL
- Sequelize
- Express
- Dotenv

## Application Functionality

The application is able to perform the following functions:

- Manage products in the database with the following parameters:
  - Product Name
  - Price
  - Stock
  - Category (from Categories table)
- Manage categories in the database with the following parameters:
  - Category Name
- Manage tags in the database with the following parameters:
  - Tag Name
- Perform all CRUD operations for products, categories, and tags

## Video Demonstration

The following video shows a demonstration of the application being used!

https://youtu.be/mdLnYeFkw7M

## Installation

To use this application, you will need to have Node.js and MySQL installed and configured.

To install the application:

1. Fork the repository.
2. Execute `npm install` in the command line.
3. Create a `.env` file in the root directory and populate it with the following process variables:\
   i. `DB_NAME = ecommerce_db`\
   ii. `DB_USER =` Your MySQL Username\
   iii. `DB_PW =` Your MySQL Password\
4. In the MySQL shell, execute `SOURCE db/db.sql;`.

## Usage

To use this application, perform the following in the console:

1. If you want to seed the database with the pre-populated seed data, execute `npm run seed`.
2. Execute `npm start` to start the server.
3. Using an API client (or a configured front-end), execute any of the following requests, as necessary, to manage the database data:\
   i. POST request to create a new item\
   ii. GET request to return either an array of all items or a specific item, queried by id\
   iii. PUT request to update an item\
   iv. DELETE request to delete an item\
4. When database management is complete, stop the server.

## References

- MySQL: https://www.mysql.com/
- Sequelize: https://sequelize.org/
- Express: https://expressjs.com/
- Dotenv: https://www.npmjs.com/package/dotenv
