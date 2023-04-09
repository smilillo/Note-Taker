const express = require('express');

const app = express();

const PORT = 3001;

const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
