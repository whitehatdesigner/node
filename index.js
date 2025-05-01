const { name } = require('ejs');
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

// app.get('/user', (req, res) => {
//     res.send("<h1>This is user page 2</h1>")
// })
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

// ============= rander page ================

app.set('view engine', 'ejs')
app.get('/about-us', (req, res) => {
    res.render('about-us');
})

// app.get('/download', (req, res) => {
//     res.download('./uploads/node-img.webp', 'new-img.webp')
// })

// app.get('/download', (req, res) => {
//     res.sendFile(__dirname + '/uploads/node-img.webp')
// })

// app.get('/user', (req, res) => {
//     res.set('namert', 'ankit shukla');
//     console.log();
//     res.send(res.get('namert'))
// })

app.get('/error', (req, res) => {
    res.header(404);
    res.end()
})