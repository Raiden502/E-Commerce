const router = require('express').Router()

router.use('/dashboard', require('./modules/dashboard'))

module.exports = router