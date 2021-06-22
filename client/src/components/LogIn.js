import { Modal } from 'react-rainbow-components'
import { useState } from 'react'

const LogIn = (props) => {
  const [loginForm, handleLoginForm] = useState({
    email: '',
    password: ''
  })

  console.log('this is the login component state:')
  console.log(props)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // const res = await axios.post(`${BASE_URL}/auth/login`, loginForm)
      // localStorage.setItem('token', res.data.token)
      // props.toggleAuthenticated(true)
      // props.toggleLogin(false)
      handleLoginForm({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    handleLoginForm({ ...loginForm, [name]: value })
  }

  return (
    <div>
      LogIn component
      <Modal isOpen={props.loginOpen}>
        <form>
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
          <button onClick={() => props.toggleLogin(false)}>Close</button>
          <button onClick={handleSubmit}>LogIn</button>
        </form>
      </Modal>
    </div>
  )
}
export default LogIn
