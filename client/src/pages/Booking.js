import React from 'react'
import { Calendar } from 'react-rainbow-components'
import { useReducer, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import moment from 'moment'
import AppointmentForm from '../components/AppointmentFormTwo'
import { Modal, Option, Picklist } from 'react-rainbow-components'

const iState = {
  selectedDate: new Date(),
  selectedBarber: null,
  barbers: [],
  timeSlots: [],
  services: [],
  openApptForm: false,
  selectedTime: null,
  bookedAppointments: [],
  warning: false
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
    case 'setBookedAppointments':
      return { ...state, bookedAppointments: action.payload }
    case 'setSelectedBarber':
      return { ...state, selectedBarber: action.payload }
    case 'setWarning':
      return { ...state, warning: action.payload }
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

  const FindAppointmentByDate = async () => {
    if (state.selectedBarber) {
      const barberId = state.barbers[`${state.selectedBarber.name}`].id
      const dateString = moment(state.selectedDate).format('YYYY-MM-DD')
      const res = await axios.get(
        `${BASE_URL}/appointment/barberdate?today=${dateString}&barber=${barberId}`
      )
      dispatch({ type: 'setBookedAppointments', payload: res.data })
    }
  }

  const handleClick = (timeslot) => {
    if (props.authenticated) {
      dispatch({ type: 'toggleOpenApptForm', payload: true })
      dispatch({ type: 'setSelectedTime', payload: timeslot.slice(11) })
    }
  }

  useEffect(() => {
    findAllBarbers()
    findAllServices()
  }, [])

  useEffect(() => {
    FindAppointmentByDate()
    BarberList()
  }, [state.selectedDate, state.selectedBarber])

  const BarberList = (value) => {
    if (!state.selectedDate || !state.selectedBarber) {
      return
    }

    let chosenBarber = state.barbers[`${state.selectedBarber.name}`]
    let start = chosenBarber.availability.startTime
    let numSlots = chosenBarber.availability.endTime - start
    let slots = [...Array(numSlots)].map((_, i) => ({
      time: `${start + i}:00`
    }))
    let availTimes = slots.map(({ time }) => {
      let date = moment(state.selectedDate).format('YYYY-MM-DD')
      return moment(`${date} ${time}`).format('YYYY-MM-DDThh:mm')
    })
    dispatch({ type: 'setTimeSlots', payload: availTimes })
  }

  const timeSlotMap = state.timeSlots.map((timeslot, index) => {
    let timeOnly = timeslot.slice(11)

    if (state.bookedAppointments.some((appt) => appt.startTime === timeOnly)) {
      return null
    }

    return (
      <div>
        <div onClick={() => handleClick(timeslot)} className="appt-card">
          {parseInt(timeOnly) === 12
            ? `${timeOnly} - 01:00`
            : parseInt(timeOnly) + 1 < 10
            ? `${timeOnly} - 0${parseInt(timeOnly) + 1}:00`
            : `${timeOnly} - ${parseInt(timeOnly) + 1}:00`}
        </div>
        <AppointmentForm
          apptTime={timeOnly}
          barber={state.barbers[`${state.selectedBarber.name}`]}
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
          onChange={(value) =>
            dispatch({ type: 'setSelectedDate', payload: value })
          }
          minDate={new Date()}
        />
      </div>
      <div className="available-wrapper">
        <Picklist
          className="picklist"
          onChange={(selectedBarber) =>
            dispatch({ type: 'setSelectedBarber', payload: selectedBarber })
          }
          value={state.selectedBarber}
          label="Select Your Barber"
        >
          {state.barbers.map((barber, index) => (
            <Option
              className="option"
              name={index}
              label={`${barber.firstName}`}
              value={`${barber.firstName}`}
            />
          ))}
        </Picklist>
        {!props.authenticated ? (
          <h3 className="warning-message">Please login before booking</h3>
        ) : null}
        <span className="avail-span">Available Appointments:</span>

        <div className="timeslots-wrapper">{timeSlotMap}</div>
      </div>
    </div>
  )
}

export default Booking

// import React from 'react'
// // import ReactDOM from 'react-dom'
// import { Calendar } from 'react-rainbow-components'
// // import { DateTimePicker } from 'react-rainbow-components'
// import { useReducer, useEffect, useState } from 'react'
// // import Nav from '../components/Nav'
// // import LogIn from '../components/LogIn'
// import axios from 'axios'
// import { BASE_URL } from '../globals'
// import moment from 'moment'
// import AppointmentForm from '../components/AppointmentForm'

// const iState = {
//   selectedDate: new Date(),
//   barbers: [],
//   timeSlots: [],
//   services: [],
//   openApptForm: false,
//   selectedTime: null,
//   bookedAppointments: []
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'setSelectedDate':
//       return { ...state, selectedDate: action.payload }
//     case 'setBarbers':
//       return { ...state, barbers: action.payload }
//     case 'setTimeSlots':
//       return { ...state, timeSlots: action.payload }
//     case 'setServices':
//       return { ...state, services: action.payload }
//     case 'toggleOpenApptForm':
//       return { ...state, openApptForm: action.payload }
//     case 'handleLoginForm':
//       return { ...state, loginForm: action.payload }
//     case 'setSelectedTime':
//       return { ...state, selectedTime: action.payload }
//     case 'setBookedAppointments':
//       return { ...state, bookedAppointments: action.payload }
//     default:
//       return state
//   }
// }

// const Booking = (props) => {
//   const [state, dispatch] = useReducer(reducer, iState)

//   const findAllBarbers = async () => {
//     const res = await axios.get(`${BASE_URL}/barber/all`)
//     dispatch({ type: 'setBarbers', payload: res.data })
//   }

//   const findAllServices = async () => {
//     const res = await axios.get(`${BASE_URL}/services/all`)
//     dispatch({ type: 'setServices', payload: res.data })
//   }

//   const FindAppointmentByDate = async () => {
//     const dateString = moment(state.selectedDate).format('YYYY-MM-DD')
//     const res = await axios.get(`${BASE_URL}/appointment/date/${dateString}`)
//     dispatch({ type: 'setBookedAppointments', payload: res.data })
//   }

//   const handleClick = (timeslot) => {
//     dispatch({ type: 'toggleOpenApptForm', payload: true })
//     dispatch({ type: 'setSelectedTime', payload: timeslot.slice(11) })
//   }

//   useEffect(() => {
//     findAllBarbers()
//     findAllServices()
//     barberList(state.selectedDate)
//   }, [])

//   useEffect(() => {
//     FindAppointmentByDate()
//     // console.log(parseInt(state.bookedAppointments[0].startTime))
//   }, [state.selectedDate])

//   const barberList = (value) => {
//     let start = 8
//     let slots = [...Array(8)].map((_, i) => ({ time: `${start + i}:00` }))
//     let availTimes = slots.map(({ time }) => {
//       let date = moment(value).format('YYYY-MM-DD')
//       return moment(`${date} ${time}`).format('YYYY-MM-DDThh:mm')
//     })
//     dispatch({ type: 'setTimeSlots', payload: availTimes })
//     dispatch({ type: 'setSelectedDate', payload: value })
//   }

//   const timeSlotMap = state.timeSlots.map((timeslot, index) => {
//     let timeOnly = timeslot.slice(11)
//     if (state.bookedAppointments.length < 1) {
//       return (
//         <div>
//           <div onClick={() => handleClick(timeslot)} className="appt-card">
//             {parseInt(timeOnly) === 12
//               ? `${timeOnly} - 01:00`
//               : parseInt(timeOnly) + 1 < 10
//               ? `${timeOnly} - 0${parseInt(timeOnly) + 1}:00`
//               : `${timeOnly} - ${parseInt(timeOnly) + 1}:00`}
//           </div>
//           <AppointmentForm
//             apptTime={timeOnly}
//             barbers={state.barbers}
//             services={state.services}
//             openApptForm={state.openApptForm}
//             dispatch={dispatch}
//             userId={props.userId}
//             selectedDate={state.selectedDate}
//             selectedTime={state.selectedTime}
//             history={props.history}
//           />
//         </div>
//       )
//     }
//     for (let i = 0; i < state.bookedAppointments.length; i++) {
//       console.log(parseInt(timeOnly))
//       console.log(state.bookedAppointments[i].startTime)
//       if (
//         parseInt(timeOnly) !== parseInt(state.bookedAppointments[i].startTime)
//       ) {
//         return (
//           <div>
//             <div onClick={() => handleClick(timeslot)} className="appt-card">
//               {parseInt(timeOnly) === 12
//                 ? `${timeOnly} - 01:00`
//                 : parseInt(timeOnly) + 1 < 10
//                 ? `${timeOnly} - 0${parseInt(timeOnly) + 1}:00`
//                 : `${timeOnly} - ${parseInt(timeOnly) + 1}:00`}
//             </div>
//             <AppointmentForm
//               apptTime={timeOnly}
//               barbers={state.barbers}
//               services={state.services}
//               openApptForm={state.openApptForm}
//               dispatch={dispatch}
//               userId={props.userId}
//               selectedDate={state.selectedDate}
//               selectedTime={state.selectedTime}
//               history={props.history}
//             />
//           </div>
//         )
//       }
//     }
//   })

//   return (
//     <div className="bookings-wrapper">
//       <div className="calendar-container">
//         <Calendar
//           className="calendar"
//           value={state.selectedDate}
//           onChange={(value) => barberList(value)}
//           minDate={new Date()}
//         />
//       </div>
//       <div className="available-wrapper">
//         <span className="avail-span">Available Appointments:</span>
//         <div className="timeslots-wrapper">{timeSlotMap}</div>
//       </div>
//     </div>
//   )
// }

// export default Booking
