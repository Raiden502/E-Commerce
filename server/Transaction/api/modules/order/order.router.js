const router = require('express').Router()
const AdminController = require('./order.controller')

router.post('/addOrder', AdminController.placeOrder)
router.post('/delOrder', AdminController.cancelOrder)
router.post('/getDetails', AdminController.getDetails)

module.exports = router
