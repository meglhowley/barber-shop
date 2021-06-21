import React from 'react'
import ReactDOM from 'react-dom'
import { Calendar } from 'react-rainbow-components'
import { DateTimePicker } from 'react-rainbow-components'
import Nav from '../components/Nav'

const Booking = () => {
  return (
    <div>
      <Nav />
      <Calendar />
      <DateTimePicker />
    </div>
  )
}

export default Booking
