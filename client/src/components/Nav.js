import { ProgressStep } from 'react-rainbow-components'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  const handleClickLogIn = (e) => {
    e.preventDefault()
    props.toggleLoginOpen(true)
  }

  const handleClickRegister = (e) => {
    e.preventDefault()
    props.toggleRegisterOpen(true)
  }

  return (
    <div className="nav-bar">
      <img className="monacle" src="https://i.imgur.com/Wq8uo6t.png" />
      <span className="logo-text">barbershop booking buddy</span>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/barbers">
        Barbers
      </NavLink>
      <NavLink className="nav-link" to="/services">
        Services
      </NavLink>
      <NavLink className="nav-link" to="/booking">
        Book an Appointment
      </NavLink>
      <NavLink className="nav-link" to="/account">
        My Account
      </NavLink>
      <div className="btns-container">
        <button onClick={handleClickRegister} className="nav-btn">
          Sign Up
        </button>
        <button onClick={handleClickLogIn} className="nav-btn">
          Log In
        </button>
      </div>
    </div>
  )
}

export default Nav
