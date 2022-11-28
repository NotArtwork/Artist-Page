const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT =  process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Application is running on ${PORT}`)
})

mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true })
const db =  mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})