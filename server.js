const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

let items = [];

// Create
app.post('/items', (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).send(item);
});

// Read
app.get('/items', (req, res) => {
    res.send(items);
});

// Update
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    items[id] = updatedItem;
    res.send(updatedItem);
});

// Delete
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    items.splice(id, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
