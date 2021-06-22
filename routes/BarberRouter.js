const router = require('express').Router()
const controller = require('../controllers/BarberController')

router.post('/create', controller.Create)
router.delete('/:barber_id', controller.DeleteBarber)
router.get('/all', controller.FindAllBarbers)
router.get('/id/:barber_id', controller.FindBarber)

module.exports = router
