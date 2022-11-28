const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/', UserContreoller.index)
router.post('/show', UserController.show)
router.post('/store', UserController.store)
router.post('/update', UserController.update)
router.post('/delete', UserController.destroy)

module.exports = router