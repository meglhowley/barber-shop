import { ProgressStep } from 'react-rainbow-components'

const ConfirmPage = (props) => {
  const handleClickAppointments = () => {
    props.history.push('/account')
  }

  const handleClickHome = () => {
    props.history.push('/')
  }

  return (
    <div>
      <div className="confirmation">
        <h1 className="you-did-it">you're all set!</h1>
        <img
          className="scissors-gif"
          src="https://thumbs.gfycat.com/WelcomeScarceFiddlercrab-max-1mb.gif"
        ></img>
        <h2>Your appointment has been booked. See you soon!</h2>
      </div>
      <div className="btns-div">
        <button onClick={handleClickAppointments} className="back-btn">
          View your appointments
        </button>
        <button onClick={handleClickHome} className="back-btn">
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default ConfirmPage
