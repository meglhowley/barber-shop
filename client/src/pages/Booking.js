import React from 'react'
import ReactDOM from 'react-dom'
import { Calendar } from 'react-rainbow-components'
import { DateTimePicker } from 'react-rainbow-components'
import { useReducer, useEffect, useState } from 'react'
import Nav from '../components/Nav'

const iState = {
  selectedDate: new Date()
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSelectedDate':
      return { ...state, selectedDate: action.payload }
    default:
      return state
  }
}

const Booking = () => {
  const [state, dispatch] = useReducer(reducer, iState)

  useEffect(() => {
    console.log(state.selectedDate)
  }, [state.selectedDate])

  return (
    <div>
      <Calendar
        value={state.selectedDate}
        onChange={(value) =>
          dispatch({ type: 'setSelectedDate', payload: value })
        }
      />
      <DateTimePicker />
    </div>
  )
}

export default Booking
