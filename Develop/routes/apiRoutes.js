const app = require ('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET /api/notes
app.get('/api/notes', (req, res) => {
    console.info(`GET request received for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
// POST /api/notes
app.post('/api/notes', (req, res) => {
    console.info(`POST request received to add notes`);
    
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
    };

    readAndAppend(newNote, './db/db.json');

    const response = {
      status: 'success',
      body: newNote,
    };

    res.json(response);
  } else {
    res.json('Error in posting note');
  }
});
// DELETE /api/notes
app.delete('/api/notes', (req, res) => {
    
});

module.exports = app;