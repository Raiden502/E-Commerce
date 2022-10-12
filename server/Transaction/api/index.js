const router = require('express').Router()

router.use('/order',require('./modules/order'))

module.exports = router