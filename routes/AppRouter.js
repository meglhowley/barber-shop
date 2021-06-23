const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const BarberRouter = require('./BarberRouter')
const ServicesRouter = require('./ServicesRouter')
const ReviewRouter = require('./ReviewRouter')
const AppointmentRouter = require('./AppointmentRouter')

router.use('/auth', AuthRouter)
router.use('/barber', BarberRouter)
router.use('/services', ServicesRouter)
router.use('/reviews', ReviewRouter)
router.use('/appointment', AppointmentRouter)

module.exports = router
