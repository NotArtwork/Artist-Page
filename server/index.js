const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { MongoClient, ServerApiVersion } = require('mongodb')
const UserRoutes = require('./routes/user')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT =  process.env.PORT || 5001

app.listen(PORT, () => {
    console.log(`Application is running on ${PORT}`)
})

// const uri = "mongodb+srv://Artwork:Uchiha1245@cluster0.5kkhush.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });



mongoose.connect('mongodb+srv://Artwork:Uchiha1245@cluster0.5kkhush.mongodb.net/Artist-Page')
const db =  mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connection Established')
})

app.use('/api/employee', UserRoutes)