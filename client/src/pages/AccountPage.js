import { useEffect, useReducer, useState } from 'react'
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
    console.log(res.data)
    dispatch({ type: 'setPastAppointments', payload: res.data })
  }

  const handleDelete = async (apptId) => {
    const res = await axios.delete(`${BASE_URL}/appointment/${apptId}`)
    dispatch({ type: 'setForceUpdate', payload: res })
  }

  const mappedAppointments = state.upcomingAppointments.map((appt, i) => (
    <div className="appointment-card" key={i}>
      <button onClick={() => handleDelete(appt.id)}>Cancel Appointment</button>
      <h3>{appt.date}</h3>
      <h3>{appt.Service.name}</h3>
      <h3>{`with ${appt.Barber.firstName} ${appt.Barber.lastInitial}.`}</h3>
    </div>
  ))
  const pastAppointments = state.pastAppointments.map((appt, i) => (
    <div className="appointment-card" key={i}>
      <h3>{appt.date}</h3>
      <h3>{appt.Service.name}</h3>
      <h3>{`with ${appt.Barber.firstName} ${appt.Barber.lastInitial}.`}</h3>
    </div>
  ))

  const FindAllReviewsForUser = async () => {
    const res = await axios.get(`${BASE_URL}/user`)
    console.log(res)
    console.log(res.data)
    dispatch({ type: 'setUserReviews', payload: res.data })
    console.log(res.data)
  }

  const userReviewsMap = state.userReviews.map((review, idx) => {
    return <EditableReviewCard key={idx} review={review} />
  })

  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <div className="upcoming-appointments">{mappedAppointments}</div>
      <h2>Past Appointments</h2>
      <div className="past-appointments">{pastAppointments}</div>

      <div>user reviews{userReviewsMap}</div>
    </div>
  )
}

export default AccountPage
