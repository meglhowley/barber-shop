const router = require('express').Router()
const controller = require('../controllers/ServicesController')

router.post('/create', controller.CreateService)
router.delete('/:service_id', controller.DeleteService)
router.get('/all', controller.FindAllServices)
router.get('/id/:barber_id', controller.FindService)

module.exports = router
