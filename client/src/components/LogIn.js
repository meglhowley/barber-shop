import { Modal } from 'react-rainbow-components'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { BASE_URL } from '../globals'

const LogIn = (props) => {
  return (
    <div>
      <Modal
        className="modal login"
        isOpen={props.loginOpen}
        onRequestClose={() => props.toggleLoginOpen(false)}
      >
        <form onSubmit={props.handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="jane@mail.com"
            value={props.loginForm.email}
            onChange={props.handleChange}
            required
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={props.loginForm.password}
            onChange={props.handleChange}
            required
          />
          <br />
          <button className="login-btn">LOG IN</button>
        </form>
      </Modal>
    </div>
  )
}
export default LogIn
