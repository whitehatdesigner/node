const express = require('express');

const app = express();

app.listen('2000');

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hi...')
})

app.post('/book-now', (req, res) => {
    res.send(req.body);
})