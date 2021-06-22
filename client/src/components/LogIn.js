import { Modal } from 'react-rainbow-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const LogIn = (props) => {
  const [loginForm, handleLoginForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    handleLoginForm({ ...loginForm, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, loginForm)
      console.log(res)
      localStorage.setItem('token', res.data.token)
      handleLoginForm({ email: '', password: '' })
      props.toggleLoginOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(props.loginOpen)
  }, [loginForm])

  return (
    <div>
      LogIn component
      <Modal
        isOpen={props.loginOpen}
        onRequestClose={() => props.toggleLoginOpen(false)}
      >
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="jane@mail.com"
            value={loginForm.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={loginForm.password}
            onChange={handleChange}
            required
          />
          <button>LogIn</button>
        </form>
      </Modal>
    </div>
  )
}
export default LogIn
