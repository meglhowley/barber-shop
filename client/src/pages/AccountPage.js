import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import moment from 'moment'
import EditableReviewCard from '../components/EditableReviewCard'

const iState = {
  upcomingAppointments: [],
  pastAppointments: [],
  apptId: null,
  forceUpdate: [],
  userReviews: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'setUpcomingAppointments':
      return { ...state, upcomingAppointments: action.payload }
    case 'setPastAppointments':
      return { ...state, pastAppointments: action.payload }
    case 'setApptId':
      return { ...state, apptId: action.payload }
    case 'setForceUpdate':
      return { ...state, forceUpdate: action.payload }
    case 'setUserReviews':
      return { ...state, userReviews: action.payload }
    default:
      return state
  }
}

const AccountPage = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)
  const todayDate = moment().format('YYYY-MM-DD')

  useEffect(() => {
    FindAllUpcomingAppointments()
    FindAllPastAppointments()
    FindAllReviewsForUser()
  }, [state.forceUpdate])

  const FindAllUpcomingAppointments = async () => {
    const res = await axios.get(
      `${BASE_URL}/appointment/upcoming?today=${todayDate}`
    )
    dispatch({ type: 'setUpcomingAppointments', payload: res.data })
  }

  const FindAllPastAppointments = async () => {
    const res = await axios.get(
      `${BASE_URL}/appointment/past?today=${todayDate}`
    )
    dispatch({ type: 'setPastAppointments', payload: res.data })
  }

  const handleDelete = async (apptId) => {
    const res = await axios.delete(`${BASE_URL}/appointment/${apptId}`)
    dispatch({ type: 'setForceUpdate', payload: res })
  }

  const mappedAppointments = state.upcomingAppointments.map((appt, i) => (
    <div className="appointment-card" key={i}>
      <img
        className="appt-img"
        src="https://airows.com/.image/t_share/MTM4NTIzMTUyMTk5MTk4MTE5/img_9010jpg.jpg"
      ></img>
      <br />
      <h1 className="appt-date">{`${appt.date} || ${appt.Service.name}`}</h1>
      <div className="length-route">
        <span>{`Time: ${appt.startTime}`}</span>
        <span id="route">{` || with: ${appt.Barber.firstName} ${appt.Barber.lastInitial}`}</span>
        <button className="cancel-btn" onClick={() => handleDelete(appt.id)}>
          Cancel Appointment
        </button>
      </div>
    </div>
  ))
  const pastAppointments = state.pastAppointments.map((appt, i) => (
    <div className="appointment-card" key={i}>
      <img
        className="appt-img"
        src="https://airows.com/.image/t_share/MTM4NTIzMTUyMTk5MTk4MTE5/img_9010jpg.jpg"
      ></img>
      <br />
      <h1 className="appt-date">{`${appt.date} || ${appt.Service.name}`}</h1>
      <div className="length-route">
        <span>{`Time: ${appt.startTime}`}</span>
        <span id="route">{` || with: ${appt.Barber.firstName} ${appt.Barber.lastInitial}`}</span>
      </div>
    </div>
  ))

  const FindAllReviewsForUser = async () => {
    const res = await axios.get(`${BASE_URL}/reviews/user`)
    dispatch({ type: 'setUserReviews', payload: res.data })
  }

  const handleUserReviewDelete = async (review_id) => {
    const res = await axios.delete(`${BASE_URL}/reviews/${review_id}`)
    dispatch({ type: 'setForceUpdate', payload: res })
  }

  const userReviewsMap = state.userReviews.map((review, idx) => {
    return (
      <EditableReviewCard
        key={idx}
        review={review}
        handleUserReviewDelete={handleUserReviewDelete}
        dispatch={dispatch}
      />
    )
  })

  return (
    <div className="account-container">
      <h2>Upcoming Appointments:</h2>
      <div className="upcoming-appointments">{mappedAppointments}</div>
      <h2>Past Appointments:</h2>
      <div className="past-appointments">{pastAppointments}</div>
      <h2>Your Activity:</h2>
      <div>{userReviewsMap}</div>
    </div>
  )
}

export default AccountPage
