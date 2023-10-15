const express = require('express')
const app = express()
const { dirname } = require('path')

app.listen(3000)

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname})
})

// error checking
app.use((req, res) => {
    res.sendStatus(404)
})