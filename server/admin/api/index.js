const router = require('express').Router()

router.use('/admin',require('./modules/admin'))

module.exports = router