import React from 'react'
import ReactDOM from 'react-dom'
import { Calendar, Modal } from 'react-rainbow-components'
import { DateTimePicker } from 'react-rainbow-components'
import { useReducer, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import LogIn from '../components/LogIn'
import axios from 'axios'
import { BASE_URL } from '../globals'
import AppointmentCard from '../components/AppointmentCard'
import moment from 'moment'

const iState = {
  selectedDate: new Date(),
  barbers: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSelectedDate':
      return { ...state, selectedDate: action.payload }
    case 'setBarbers':
      return { ...state, barbers: action.payload }
    default:
      return state
  }
}

const Booking = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)
  // useEffect(() => {
  //   // console.log(state.selectedDate)
  // }, [state.selectedDate])

  const findAllBarbers = async () => {
    const res = await axios.get(`${BASE_URL}/barber/all`)
    // console.log(res.data[1].availability)
    dispatch({ type: 'setBarbers', payload: res.data })
  }

  useEffect(() => {
    findAllBarbers()
    // barberList()
  }, [])

  // const startTime = parseInt(state.barbers[i].availability.startTime)
  // const endTime = parseInt(state.barbers[i].availability.endTime)

  const barberList = (value) => {
    let start = 8
    let slots = [...Array(8)].map((_, i) => ({ time: `${start + i}:00` }))
    let availTimes = slots.map(({ time }) => {
      let date = moment(value).format('YYYY-MM-DD')
      return moment(`${date} ${time}`).format('YYYY-MM-DDThh:mm')
    })
    console.log(availTimes)
    dispatch({ type: 'setSelectedDate', payload: value })
  }

  return (
    <div className="bookings-wrapper">
      <div className="calendar-container">
        <Calendar
          className="calendar"
          value={state.selectedDate}
          onChange={(value) => barberList(value)}
        />
        <DateTimePicker />
      </div>
      <div className="available-wrapper">
        <b>Available Appointments:</b>
      </div>
    </div>
  )
}

export default Booking
