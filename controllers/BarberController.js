const { Barber } = require('../models')

const Create = async (req, res) => {
  try {
    const { firstName, lastInitial, bigImage, smallImage } = req.body

    let barberBody = {
      firstName,
      lastInitial,
      bigImage,
      smallImage
    }
    const barber = await Barber.create(barberBody)
    res.send(barber)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Create
}
