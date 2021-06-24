import React from 'react'
// import ReactDOM from 'react-dom'
import { Calendar } from 'react-rainbow-components'
// import { DateTimePicker } from 'react-rainbow-components'
import { useReducer, useEffect, useState } from 'react'
// import Nav from '../components/Nav'
// import LogIn from '../components/LogIn'
import axios from 'axios'
import { BASE_URL } from '../globals'
import moment from 'moment'
import AppointmentForm from '../components/AppointmentForm'

const iState = {
  selectedDate: new Date(),
  barbers: [],
  timeSlots: [],
  services: [],
  openApptForm: false,
  selectedTime: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSelectedDate':
      return { ...state, selectedDate: action.payload }
    case 'setBarbers':
      return { ...state, barbers: action.payload }
    case 'setTimeSlots':
      return { ...state, timeSlots: action.payload }
    case 'setServices':
      return { ...state, services: action.payload }
    case 'toggleOpenApptForm':
      return { ...state, openApptForm: action.payload }
    case 'handleLoginForm':
      return { ...state, loginForm: action.payload }
    case 'setSelectedTime':
      return { ...state, selectedTime: action.payload }
    default:
      return state
  }
}

const Booking = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)

  const findAllBarbers = async () => {
    const res = await axios.get(`${BASE_URL}/barber/all`)
    dispatch({ type: 'setBarbers', payload: res.data })
  }

  const findAllServices = async () => {
    const res = await axios.get(`${BASE_URL}/services/all`)
    dispatch({ type: 'setServices', payload: res.data })
  }

  const handleClick = (timeslot) => {
    dispatch({ type: 'toggleOpenApptForm', payload: true })
    dispatch({ type: 'setSelectedTime', payload: timeslot.slice(11) })
  }

  useEffect(() => {
    findAllBarbers()
    findAllServices()
    console.log(props)
  }, [])

  const barberList = (value) => {
    let start = 8
    let slots = [...Array(8)].map((_, i) => ({ time: `${start + i}:00` }))
    let availTimes = slots.map(({ time }) => {
      let date = moment(value).format('YYYY-MM-DD')
      return moment(`${date} ${time}`).format('YYYY-MM-DDThh:mm')
    })
    dispatch({ type: 'setTimeSlots', payload: availTimes })
    dispatch({ type: 'setSelectedDate', payload: value })
  }

  const timeSlotMap = state.timeSlots.map((timeslot, index) => {
    let timeOnly = timeslot.slice(11)
    return (
      <div>
        <div onClick={() => handleClick(timeslot)} className="appt-card">
          {parseInt(timeOnly) === 12
            ? `${timeOnly} - 01:00`
            : parseInt(timeOnly) + 1 < 10
            ? `${timeOnly} - 0${parseInt(timeOnly) + 1}:00`
            : `${timeOnly} - ${parseInt(timeOnly) + 1}:00`}
        </div>
        {console.log(parseInt(timeOnly))}
        <AppointmentForm
          apptTime={timeOnly}
          barbers={state.barbers}
          services={state.services}
          openApptForm={state.openApptForm}
          dispatch={dispatch}
          userId={props.userId}
          selectedDate={state.selectedDate}
          selectedTime={state.selectedTime}
          history={props.history}
        />
      </div>
    )
  })

  return (
    <div className="bookings-wrapper">
      <div className="calendar-container">
        <Calendar
          className="calendar"
          value={state.selectedDate}
          onChange={(value) => barberList(value)}
        />
      </div>
      <div className="available-wrapper">
        <b>Available Appointments:</b>
        {timeSlotMap}
      </div>
    </div>
  )
}

export default Booking
