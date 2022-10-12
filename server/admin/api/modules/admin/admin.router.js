const router = require('express').Router()
const AdminController = require('./admin.controller')

router.get('/', AdminController.getData)
router.post('/addProduct', AdminController.newProduct)
router.post('/addAdmin', AdminController.addAdmin)
router.post('/login',AdminController.login)
router.post('/delUser',AdminController.deleteuser)
router.get('/getOrder',AdminController.orderDetails)
module.exports = router
