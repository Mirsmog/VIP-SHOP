require('dotenv').config();
const express = require('express');
const sequelize = require('./db')

const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    app.listen(port, hostname, backlog)
  } catch (error) {
    console.log(error)
  }
}
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
