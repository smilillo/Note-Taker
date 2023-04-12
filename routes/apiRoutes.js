const app = require ('express').Router();
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET /notes
app.get('/notes', (req, res) => {
    console.info(`GET request received for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST /notes
app.post('/notes', (req, res) => {
    console.info(`POST request received to add notes`);
    
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title: title,
      text: text,
      note_id: uuidv4()
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
app.delete('/notes:id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
      .then((data) => JSON.parse(data))
      .then((json) => {
        // Make a new array of all tips except the one with the ID provided in the URL
        const result = json.filter((note) => note.note_id !== noteId);
  
        // Save that array to the filesystem
        writeToFile('./db/db.json', result);
  
        // Respond to the DELETE request
        res.json(`Item ${noteId} has been deleted 🗑️`);
      });
});

module.exports = app;