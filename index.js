const express = require('express')
const app = express()
const messages = []

app.use(express.urlencoded())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('messages.ejs', {
        messages: messages
    });
});

app.post('/message', (req, res) => {
    console.log('received message', req.body.message);
    messages.push(req.body.message)
    res.redirect('/')
})
    



app.listen(3000)