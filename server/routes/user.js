const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

const upload = require('../middleware/upload')

router.get('/', UserController.index)
router.post('/show', UserController.show)
router.post('/store', upload.single('profile_image'), UserController.store)
router.patch('/update/pieces', upload.array('art_pieces'), UserController.update)
router.post('/update/profile_image', upload.single('profile_image'), UserController.update)
router.post('/delete', UserController.destroy)

module.exports = router 