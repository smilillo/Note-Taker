// Import express
const express = require('express');
const app = express();

// Assign PORT
const PORT = process.env.PORT || 3001;

// Import api and html routes
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// PORT listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
