const router = require('express').Router()
const controller = require('../controllers/AppointmentController')

router.post('/create', controller.CreateAppointment)
router.delete('/:appt_id', controller.DeleteAppointment)
router.get('/all', controller.FindAllAppointments)
router.get('/id/:appt_id', controller.FindAppointmentById)
router.get('/upcoming', controller.FindUpcomingAppointmentByUserId)
router.get('/past', controller.FindPastAppointmentByUserId)
router.get('/date/:appt_date', controller.FindAppointmentByDate)
module.exports = router
