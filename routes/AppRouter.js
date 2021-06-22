const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const BarberRouter = require('./BarberRouter')

router.use('/auth', AuthRouter)
router.use('/barber', BarberRouter)

module.exports = router
