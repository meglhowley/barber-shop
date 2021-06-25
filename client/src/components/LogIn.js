import { Modal } from 'react-rainbow-components'

const LogIn = (props) => {
  return (
    <div>
      <Modal
        className="modal login"
        isOpen={props.loginOpen}
        onRequestClose={() => props.toggleLoginOpen(false)}
      >
        <div className="please-log-in">Please Log In Below:</div>
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
          {props.loginError ? <p>Incorrect username or password</p> : null}
          <br />
          <button className="login-btn">LOG IN</button>
        </form>
      </Modal>
    </div>
  )
}
export default LogIn
