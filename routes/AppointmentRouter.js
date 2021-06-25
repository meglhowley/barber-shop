const router = require('express').Router()
const controller = require('../controllers/AppointmentController')
const middleware = require('../middleware')

router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateAppointment
)
router.delete(
  '/:appt_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteAppointment
)
router.delete('/delete/all', controller.DeleteAllAppointment)
router.get('/all', controller.FindAllAppointments)
router.get('/id/:appt_id', controller.FindAppointmentById)
router.get(
  '/upcoming',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindUpcomingAppointmentByUserId
)
router.get(
  '/past',
  middleware.stripToken,
  middleware.verifyToken,
  controller.FindPastAppointmentByUserId
)
router.get('/date/:appt_date', controller.FindAppointmentByDate)
router.get('/barberdate', controller.FindAppointmentByBarberIdDate)
module.exports = router
