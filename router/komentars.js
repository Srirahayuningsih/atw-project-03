const express = require('express')
const router = express.Router()

const komentarcontroller = require('../controllers/komentar')

 router.route('/komentars')
 	.get(komentarcontroller.index)
 	.post(komentarcontroller.store)

router.get('/komentars', komentarcontroller.index)

module.exports = router
