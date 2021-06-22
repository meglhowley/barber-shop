import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  console.log(props.toggleLoginOpen)
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
        <button className="nav-btn">Sign Up</button>
        <button className="nav-btn">Log In</button>
      </div>
    </div>
  )
}

export default Nav
