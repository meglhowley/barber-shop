import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/barbers">
        Meet Our Staff
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
