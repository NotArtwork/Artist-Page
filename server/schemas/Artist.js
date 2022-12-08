const mongoose = require('mongoose')
const Schema = mongoose.Schema

const artistSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
}, {timestamp: true})

const Artist = mongoose.model('Artist', artistSchema)

module.exports = Artist