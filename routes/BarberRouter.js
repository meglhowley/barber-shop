const router = require('express').Router()
const controller = require('../controllers/BarberController')

router.post('/create', controller.Create)

module.exports = router
