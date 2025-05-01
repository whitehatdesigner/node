const express = require('express');

const app = express();

app.listen('7000');

app.get('/' , (req, res) => {
    const users = [
        {name: 'a', age: 20},
        {name: 'b', age: 30}
    ]
    res.json(users)
})


app.get('/about', (req, res) => {
    res.redirect('/user')
})


app.get('/user', (req, res) => {
    res.send("<h1>This is user page</h1>")
})
// const ankit = 20;

// app.get(`/about/user/${ankit}`, (req, res) => {
//     res.send("<h1>About Page with user</h1>")
// })

// app.get(`/about/user/:id`, (req, res) => {
//     res.send(req.params)
// })

// app.get('/user/:id/book/:bookid', (req, res) => {
//     res.send(`Book Id : ${req.params.bookid}`)
// })

// app.get('/users/search', (req, res) => {
//     res.send(req.query);
// })