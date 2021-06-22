const { Services } = require('../models')

const CreateService = async (req, res) => {
  try {
    const { name, description, price, duration } = req.body

    let serviceBody = {
      name,
      description,
      price,
      duration
    }
    const service = await Services.create(serviceBody)
    res.send(service)
  } catch (error) {
    throw error
  }
}
const DeleteService = async (req, res) => {
  try {
    let serviceId = parseInt(req.params.service_id)
    await Services.destroy({ where: { id: serviceId } })
    res.send({ message: `Deleted service with an id of ${serviceId}` })
  } catch (error) {
    throw error
  }
}
const FindAllServices = async (req, res) => {
  try {
    let services = await Services.findAll({})
    res.send(services)
  } catch (error) {
    throw error
  }
}
const FindService = async (req, res) => {
  try {
    let serviceId = parseInt(req.params.service_id)
    const service = await Services.findByPk(serviceId)
    res.send(service)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateService,
  DeleteService,
  FindAllServices,
  FindService
}
