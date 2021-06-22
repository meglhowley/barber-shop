const { Barber } = require('../models')

const Create = async (req, res) => {
  try {
    const { firstName, lastInitial, bigImage, smallImage, availability } =
      req.body

    let barberBody = {
      firstName,
      lastInitial,
      bigImage,
      smallImage,
      availability
    }
    const barber = await Barber.create(barberBody)
    res.send(barber)
  } catch (error) {
    throw error
  }
}
const DeleteBarber = async (req, res) => {
  try {
    let barberId = parseInt(req.params.barber_id)
    await Barber.destroy({ where: { id: barberId } })
    res.send({ message: `Deleted barber with an id of ${barberId}` })
  } catch (error) {
    throw error
  }
}
const FindAllBarbers = async (req, res) => {
  try {
    let barbers = await Barber.findAll({})
    res.send(barbers)
  } catch (error) {
    throw error
  }
}
const FindBarber = async (req, res) => {
  try {
    let barberId = parseInt(req.params.barber_id)
    const barber = await Barber.findByPk(barberId)
    res.send(barber)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Create,
  DeleteBarber,
  FindAllBarbers,
  FindBarber
}
