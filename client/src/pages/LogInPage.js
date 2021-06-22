import React from 'react'
import ReactDOM from 'react-dom'
import { Calendar, Modal } from 'react-rainbow-components'
import { DateTimePicker } from 'react-rainbow-components'
import { useReducer, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import LogIn from '../components/LogIn'
import Register from '../components/Register'

const LogInPage = (props) => {
  console.log('this is the loginpage component state:')
  console.log(props.dispatch)
  return (
    <div>
      LogInPage
      <div>
        <LogIn
          isLoggedIn={props.iState.isLoggedIn}
          toggleLogin={props.dispatch.toggleLogin}
          toggleAuthenticated={props.dispatch.toggleAuthenticated}
          dispatch={props.dispatch}
        />
      </div>
      <div>
        Register Component below:
        <Register />
      </div>
    </div>
  )
}

export default LogInPage
