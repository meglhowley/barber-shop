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
      console.log(error)
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
        isOpen={props.registerOpen}
        onRequestClose={() => props.toggleRegisterOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Jane "
            value={registerForm.firstName}
            onChange={handleChange}
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={registerForm.lastName}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="jane@mail.com"
            value={registerForm.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={registerForm.password}
            onChange={handleChange}
            required
          />
          <button
            disabled={
              !registerForm.email ||
              !registerForm.password ||
              !registerForm.firstName ||
              !registerForm.lastName
            }
          >
            Sign Up!
          </button>
        </form>
        <button>Close</button>
      </Modal>
    </div>
  )
}

export default Register
