const { Appointment, Services, Barber } = require('../models')
const { Op } = require('sequelize')

const CreateAppointment = async (req, res) => {
  try {
    const { barberId, serviceId, date, duration, startTime } = req.body

    let apptBody = {
      barberId,
      userId: res.locals.payload.id,
      serviceId,
      date,
      duration,
      startTime
    }

    const appt = await Appointment.create(apptBody)
    res.send(appt)
  } catch (error) {
    throw error
  }
}
const DeleteAppointment = async (req, res) => {
  try {
    let apptId = parseInt(req.params.appt_id)
    await Appointment.destroy({ where: { id: apptId } })
    res.send({ message: `Deleted appointment with an id of ${apptId}` })
  } catch (error) {
    throw error
  }
}
const FindAllAppointments = async (req, res) => {
  try {
    let appts = await Appointment.findAll({})
    res.send(appts)
  } catch (error) {
    throw error
  }
}
const FindAppointmentById = async (req, res) => {
  try {
    let apptId = parseInt(req.params.appt_id)
    const appt = await Appointment.findByPk(apptId)
    res.send(appt)
  } catch (error) {
    throw error
  }
}
const FindUpcomingAppointmentByUserId = async (req, res) => {
  try {
    let userId = parseInt(res.locals.payload.id)
    let today = req.query.today
    const appt = await Appointment.findAll({
      where: {
        [Op.and]: [{ userId: userId }, { date: { [Op.gte]: today } }]
      },
      include: [{ model: Services }, { model: Barber }],
      order: [
        ['date', 'ASC'],
        ['startTime', 'ASC']
      ]
    })
    res.send(appt)
  } catch (error) {
    throw error
  }
}
const FindPastAppointmentByUserId = async (req, res) => {
  try {
    let userId = parseInt(res.locals.payload.id)
    let today = req.query.today
    const appt = await Appointment.findAll({
      where: {
        [Op.and]: [{ userId: userId }, { date: { [Op.lt]: today } }]
      },
      include: [{ model: Services }, { model: Barber }],
      order: [['date', 'ASC']]
    })
    res.send(appt)
  } catch (error) {
    throw error
  }
}
const FindAppointmentByDate = async (req, res) => {
  try {
    let date = req.params.appt_date
    let compstring = `${date}%`
    const appts = await Appointment.findAll({
      where: {
        date: { [Op.like]: compstring }
      }
    })
    res.send(appts)
  } catch (error) {
    throw error
  }
}
const DeleteAllAppointment = async (req, res) => {
  try {
    await Appointment.destroy({ truncate: true })
    res.send({ message: `Deleted appointments` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateAppointment,
  DeleteAppointment,
  FindAllAppointments,
  FindAppointmentById,
  FindUpcomingAppointmentByUserId,
  FindPastAppointmentByUserId,
  FindAppointmentByDate,
  DeleteAllAppointment
}
