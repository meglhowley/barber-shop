import Nav from '../components/Nav'
import { useEffect, useState, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const iState = {
  appointments: []
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'setAppointments':
      return { ...state, appointments: action.payload }
    default:
      return state
  }
}

const AccountPage = (props) => {
  //const { user_id } = props
  const user_id = 4
  const [state, dispatch] = useReducer(reducer, iState)

  useEffect(() => {
    FindAllAppointments()
  }, [])

  const FindAllAppointments = async () => {
    if (user_id) {
      const res = await axios.get(`${BASE_URL}/appointment/user/${user_id}`)
      console.log(res.data)
      dispatch({ type: 'setAppointments', payload: res.data })
    }
  }

  const mappedAppointments = state.appointments.map((appt, i) => (
    <div key={i}>
      <h1>Appointment</h1>
      <p>{appt.date}</p>
      <h3>{appt.barberId}</h3>
      <h3>{appt.serviceId}</h3>
    </div>
  ))

  console.log(user_id)
  return (
    <div>
      <h2>My appointments</h2>
      <div className="account-appointments">{mappedAppointments}</div>
    </div>
  )
}

export default AccountPage
