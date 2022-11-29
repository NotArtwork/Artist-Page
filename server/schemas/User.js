const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    full_name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    art_pieces: {
        type: Array
    },
    profile_image: {
        type: String
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

module.exports = User