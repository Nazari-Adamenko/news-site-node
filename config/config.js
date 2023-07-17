
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USR_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres"
  },
  test: {
    username: "news_site",
    password: "news_site",
    database: "database_test",
  host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
  username: "news_site",
    password: "news_site",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};
