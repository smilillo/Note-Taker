const path = require('path');
const app = require ('express').Router();

// GET homepage route - wildcard route
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET notes route
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = app;