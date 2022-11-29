const { response } = require('express')
const User = require('../schemas/User')


// Show All Users
const index = (req, res, next) => {

    // let req = await User.find()
    // let res = await req.json()
    
    User.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

// Single User Returned
const show = (req, res, next) => {
    let UserID = req.body.userID
    User.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    }) 
}

const store = (req, res, next) => {
    let user = new User({
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,
    })
    if(req.file) {
        user.profile_image = req.file.path
    }
    user.save()
    .then(response => {
        res.json({
            message: "User Added Successfully"
        })
    })
    .catch(error => {
        res.json({
            message: "An error occured!"
        })
    })
}


// Update Selected User
const update = (req, res, next) => {
    let userID = req.body.userID

    let updatedData = {
        name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,
    }
    if (req.files) {
        let path = ''
        req.files.forEach((files, index, arr) => {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        updatedData.art_pieces = path
    }

    User.findByIdAndUpdate(userID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'User updated'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}


// Deletes User
const destroy = (req, res, next) => {
    let userID = req.body.userID
    User.findOneAndRemove(userID)
    .then(() => {
        req.json({
            message: 'User deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}