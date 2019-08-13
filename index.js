const express = require('express')
const app = express()

app.use(express.urlencoded())
app.use(express.static('public'))

app.post('/message', (req, res) => {
    res.send('Thank You for message')
    console.log('received message', req.body.message);
})

app.listen(3000)