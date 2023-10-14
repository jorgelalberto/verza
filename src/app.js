const express = require('express')
const app = express()
const employeeRoutes = require('./api/routes/employee')
const employerRoutes = require('./api/routes/employer')
const investorRoutes = require('./api/routes/investor')
const { dirname } = require('path')

app.use(employeeRoutes)
app.use(employerRoutes)
app.use(investorRoutes)

app.listen(3000)

app.get('/', (req, res) => {
    res.sendFile('./api/views/index.html', {root: __dirname})
})

app.get('/investor', (req, res) => {
    res.sendFile('./api/views/investor.html', {root: __dirname})
})

app.get('/employee', (req, res) => {
    res.sendFile('./api/views/employee.html', {root: __dirname})
})

app.get('/employer', (req, res) => {
    res.sendFile('./api/views/employer.html', {root: __dirname})
})

// error checking
app.use((req, res) => {
    res.sendStatus(404)
})