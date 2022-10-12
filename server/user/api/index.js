const router = require('express').Router()

router.use('/user',require('./modules/user'))

module.exports =router;