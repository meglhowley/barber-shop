import { ProgressStep } from 'react-rainbow-components'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

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
      <div className="btns-container">
        <button
          onClick={
            !props.authenticated
              ? handleClickRegister
              : () => props.history.push('/account')
          }
          className="nav-btn"
        >
          {!props.authenticated ? 'Sign Up' : 'My Account'}
        </button>
        <button
          onClick={!props.authenticated ? handleClickLogIn : props.logOut}
          className="nav-btn"
        >
          {!props.authenticated ? 'Log In' : 'Log Out'}
        </button>
      </div>
    </div>
  )
}

export default Nav
