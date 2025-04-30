const express = require('express');

const app = express();

app.listen('7000');

app.get('/' , (req, res) => {
    res.send("<h1>Welcome to home page</h1>")
})


app.get('/about', (req, res) => {
    res.send("<h1>About Page</h1>")
})

const ankit = 20;

app.get(`/about/user/${ankit}`, (req, res) => {
    res.send("<h1>About Page with user</h1>")
})

app.get(`/about/user/:id`, (req, res) => {
    res.send(req.params)
})

app.get('/user/:id/book/:bookid', (req, res) => {
    res.send(`Book Id : ${req.params.bookid}`)
})

app.get('/users/search', (req, res) => {
    res.send(req.query);
})