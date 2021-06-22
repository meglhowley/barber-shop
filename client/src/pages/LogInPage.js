import React from 'react'
import ReactDOM from 'react-dom'
import { Calendar, Modal } from 'react-rainbow-components'
import { DateTimePicker } from 'react-rainbow-components'
import { useReducer, useEffect, useState } from 'react'
import Nav from '../components/Nav'
import LogIn from '../components/LogIn'
import Register from '../components/Register'

const LogInPage = (props) => {
  return (
    <div>
      LogInPage
      <div>
        <LogIn
          loginOpen={props.loginOpen}
          toggleLogin={props.toggleLoginOpen}
          setAuthenticated={props.setAuthenticated}
        />
      </div>
      <div>
        Register Component below:
        <Register
          registerOpen={true}
          toggleRegister={props.toggleRegisterOpen}
          setAuthenticated={props.setAuthenticated}
        />
      </div>
    </div>
  )
}

export default LogInPage
