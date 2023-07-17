require('dotenv').config();
const express = require('express');
const db = require('./models/index');
const PORT = process.env.PORT || 8000;

const app = express();



const start = async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();