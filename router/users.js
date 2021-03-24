const express = require('express')
const router = express.Router()

const usercontroller = require('../controllers/user')

 router.route('/users')
 	.get(usercontroller.index)
 	.post(usercontroller.store)

router.get('/users', usercontroller.index)

router.get('/users/create', usercontroller.create)

router.get('/users/:id', usercontroller.show)

router.put('/users/:id', usercontroller.update)

router.delete('/users/:userId', usercontroller.delete)

router.get('/users/:Id/edit', usercontroller.edit)



module.exports = router
