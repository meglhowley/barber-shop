const router = require('express').Router()
const controller = require('../controllers/AppointmentController')
const middleware = require('../middleware')

router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateAppointment
)
router.delete('/:appt_id', controller.DeleteAppointment)
router.get('/all', controller.FindAllAppointments)
router.get('/id/:appt_id', controller.FindAppointmentById)
router.get('/upcoming', controller.FindUpcomingAppointmentByUserId)
router.get('/past', controller.FindPastAppointmentByUserId)
router.get('/date/:appt_date', controller.FindAppointmentByDate)
module.exports = router
