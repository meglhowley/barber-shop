import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="nav-bar">
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
      <button>Log In</button>
      <button>Register Now</button>
    </div>
  )
}

export default Nav
