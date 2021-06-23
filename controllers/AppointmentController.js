const { Appointment } = require('../models')
const { Op } = require('sequelize')

const CreateAppointment = async (req, res) => {
  try {
    const { barberId, userId, serviceId, date, duration } = req.body

    let apptBody = {
      barberId,
      userId,
      serviceId,
      date,
      duration
    }
    // apptBody.userId = parseInt(reviewBody.userId)
    // apptBody.barberId = parseInt(reviewBody.barberId)
    // apptBody.serviceId = parseInt(reviewBody.serviceId)
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
const FindAppointmentByUserId = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    const appt = await Appointment.findAll({ where: { userId: userId } })
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

module.exports = {
  CreateAppointment,
  DeleteAppointment,
  FindAllAppointments,
  FindAppointmentById,
  FindAppointmentByUserId,
  FindAppointmentByDate
}
