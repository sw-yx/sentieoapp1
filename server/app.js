// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();

console.log('hi from /src/server.js')
// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client

app.get('/', (req, res) => {

  console.log('hi from app.get./')
  console.log(req)
  console.log(res)
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});
app.get('*', (req, res) => {

  console.log('hi from app.get')
  console.log(req)
  console.log(res)
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;