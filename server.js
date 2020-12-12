const express = require('express');
const path = require('path');
const socket = require('socket.io');

const app = express();

const messages = [];

app.use(express.static(path.join(__dirname, '/client')));

app.get('/', (req, res) => {
  res.render('index');
});

const server = app.listen(8000, () => {
  console.log('Server is running on Port:', 8000)
});
const io = socket(server);