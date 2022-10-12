const dashboardcontroller = require('./dashboard.controller')

const router = require('express').Router()

router.get('/getResult',dashboardcontroller.getResult)
router.post('/search',dashboardcontroller.getResultbyId)
router.post('/filter',dashboardcontroller.filterResult)
router.post('/selectedItem/:id',dashboardcontroller.selected)

module.exports = router