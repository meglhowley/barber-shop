import { Modal } from 'react-rainbow-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Register = (props) => {
  const [registerForm, handleRegisterForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('submitted!')
      console.log(registerForm)
      const res = await axios.post(`${BASE_URL}/auth/register`, registerForm)
      console.log(res)
      handleRegisterForm({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      })
      props.toggleRegisterOpen(false)
    } catch (error) {
      console.log(error.response)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    handleRegisterForm({ ...registerForm, [name]: value })
  }

  useEffect(() => {}, [registerForm])

  return (
    <div>
      <Modal
        className="modal"
        isOpen={props.registerOpen}
        onRequestClose={() => props.toggleRegisterOpen(false)}
      >
        <div className="prompt">
          <h1>Sign Up</h1>
          <p>
            Thanks for joining us! Please fill out the required information
            below.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={registerForm.firstName}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={registerForm.lastName}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={registerForm.email}
            onChange={handleChange}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Create A Password"
            value={registerForm.password}
            onChange={handleChange}
            required
          />
          <br />
          <button
            className="register-btn"
            disabled={
              !registerForm.email ||
              !registerForm.password ||
              !registerForm.firstName ||
              !registerForm.lastName
            }
          >
            CREATE ACCOUNT
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default Register
