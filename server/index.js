const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb')
const UserRoute = require('./routes/user')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT =  process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Application is running on ${PORT}`)
})

mongoose.connect(process.env.MONGODB_KEY)
const db =  mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})

app.use('/api/user', UserRoute)