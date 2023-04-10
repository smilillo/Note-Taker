const app = require ('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// GET /api/notes
app.get('/api/notes', (req, res) => {
    console.info(`GET request received for notes`);

    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
// POST /api/notes
app.post('/api/notes', (req, res) => {
    
});
// DELETE /api/notes
app.delete('/api/notes', (req, res) => {
    
});