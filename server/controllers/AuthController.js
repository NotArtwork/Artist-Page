const Artist = require('../schemas/Artist')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../schemas/User')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, ((err, hashedPass) => {
        if(err) {
            res.json({
                error: err
            })
        }
        let artist = new Artist ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        artist.save()
        .then(artist => {
            res.json({
                message: 'Artist Added Successfully!'
            })
        })
    }
    ))
 
}

const login = (req, res, next) => {
    let username = req.body.username
    let password = req.body.password

    Artist.findOne({$or: [{email: username}, {phone:username}]})
    .then(user => {

        // Returning User
        if(user) {
            bcrypt.compare(password, user.password, ((err, result) => {

                if(err) {
                    res.json({
                        error: err
                    })
                }

                if(result) {
                    let token = jwt.sign({name: user.name}, 'PV.,)sda?/', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful!',
                        token
                    })
                }else {
                    res.json({
                        message: 'Password does not match!'
                    })
                }
            }))
        } else {
            res.json({
                message: 'No User Found!'
            })
        }
    })
}

module.exports = {
    register, login
}