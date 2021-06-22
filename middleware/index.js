const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { token } = require('morgan')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
  //stored password - hash
  //password - plain text
  let passwordMatch = await bcrypt.compare(password, storedPassword)
  return passwordMatch
}
const createToken = (payload) => {
  //third arg = options
  let token = jwt.sign(payload, APP_SECRET)
  return token
}
const verifyToken = (req, res, next) => {
  //allows us to essentially pass props in express
  //whatever is in that state only exists during the request - secure
  const { token } = res.locals
  try {
    let payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    //put a console.log here when developing to identify error
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}
const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch (error) {
    //throw console.log here for development testing
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}

module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword
}
