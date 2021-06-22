import { Modal } from 'react-rainbow-components'
import { useState } from 'react'

const Register = (props) => {
  const [registerForm, handleRegisterForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })

  console.log(props)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // const res = await axios.post(`${BASE_URL}/auth/register`, registerForm)
      // props.toggleRegister(false)
      handleRegisterForm({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    handleRegisterForm({ ...registerForm, [name]: value })
  }

  return (
    <div>
      Register Component
      <Modal isOpen={props.registerOpen}>
        <form>
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
        </form>
        <button onClick={() => props.toggleRegister(false)}>Close</button>
        <button
          disabled={
            !registerForm.email ||
            !registerForm.password ||
            !registerForm.firstName ||
            !registerForm.lastName
          }
          // size="large"
          // color="teal"
          // animated="fade"
          onClick={handleSubmit}
        >
          Sign Up!
        </button>
      </Modal>
    </div>
  )
}

export default Register
