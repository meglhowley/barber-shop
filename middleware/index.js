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
  let token = jwt.sign(payload, APP_SECRET)
  return token
}
const verifyToken = (req, res, next) => {
  const { token } = res.locals
  try {
    let payload = jwt.verify(token, APP_SECRET)
    console.log(payload)
    if (payload) {
      res.locals.payload = payload
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  }
}
const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    console.log(token)
    if (token) {
      res.locals.token = token.replace(',', '')
      return next()
    }
  } catch (error) {
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
