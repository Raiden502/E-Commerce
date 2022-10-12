const router = require('express').Router()
const userController = require('./user.controller')


router.get('/getuser', userController.getUser)
router.post('/showcart', userController.getCartItem)
router.post('/newuser',userController.newUser)
router.post('/addcartitem',userController.addCartItem)
router.post('/deletecartitem',userController.deleteCartItem)
router.post('/login',userController.login)
router.post('/show',userController.User)
module.exports = router;