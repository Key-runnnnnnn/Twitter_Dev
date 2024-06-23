const express = require('express');
const app = express();  // create an express app
const connect = require('./config/database')


app.listen(3000, async (req, res) => {
  console.log("Server started")
  await connect();
  console.log('Database connected');
});
