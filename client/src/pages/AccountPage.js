import Nav from '../components/Nav'
import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import moment from 'moment'

const iState = {
  upcomingAppointments: [],
  pastAppointments: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'setUpcomingAppointments':
      return { ...state, upcomingAppointments: action.payload }
    case 'setPastAppointments':
      return { ...state, pastAppointments: action.payload }
    default:
      return state
  }
}

const AccountPage = (props) => {
  //const { user_id } = props
  const user_id = 4
  const [state, dispatch] = useReducer(reducer, iState)
  const todayDate = moment().format('YYYY-MM-DD')

  useEffect(() => {
    FindAllUpcomingAppointments()
    FindAllPastAppointments()
  }, [])

  const FindAllUpcomingAppointments = async () => {
    if (user_id) {
      const res = await axios.get(
        `${BASE_URL}/appointment/upcoming?user_id=${user_id}&today=${todayDate}`
      )
      console.log(res.data)
      dispatch({ type: 'setUpcomingAppointments', payload: res.data })
    }
  }
  const FindAllPastAppointments = async () => {
    if (user_id) {
      const res = await axios.get(
        `${BASE_URL}/appointment/past?user_id=${user_id}&today=${todayDate}`
      )
      console.log(res.data)
      dispatch({ type: 'setPastAppointments', payload: res.data })
    }
  }

  const mappedAppointments = state.upcomingAppointments.map((appt, i) => (
    <div key={i}>
      <h3>{appt.date}</h3>
      <h3>{appt.Service.name}</h3>
      <h3>{`with ${appt.Barber.firstName} ${appt.Barber.lastInitial}.`}</h3>
    </div>
  ))
  const pastAppointments = state.pastAppointments.map((appt, i) => (
    <div key={i}>
      <h3>{appt.date}</h3>
      <h3>{appt.Service.name}</h3>
      <h3>{`with ${appt.Barber.firstName} ${appt.Barber.lastInitial}.`}</h3>
    </div>
  ))

  console.log(user_id)
  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <div className="upcoming-appointments">{mappedAppointments}</div>
      <h2>Past Appointments</h2>
      <div className="past-appointments">{pastAppointments}</div>
    </div>
  )
}

export default AccountPage
