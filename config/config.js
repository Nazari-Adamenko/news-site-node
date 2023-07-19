
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USR_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
};
