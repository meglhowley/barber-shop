const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const BarberRouter = require('./BarberRouter')
const ServicesRouter = require('./ServicesRouter')

router.use('/auth', AuthRouter)
router.use('/barber', BarberRouter)
router.use('/services', ServicesRouter)

module.exports = router
