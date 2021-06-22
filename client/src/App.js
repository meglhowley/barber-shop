import './App.css'
import { Route, Switch } from 'react-router-dom'
import { useReducer, useEffect } from 'react'
import Home from './pages/Home'
import Barbers from './pages/Barbers'
import Booking from './pages/Booking'
import AccountPage from './pages/AccountPage'
import Services from './pages/Services'
import Nav from './components/Nav'
import LogInPage from './pages/LogInPage'

const iState = {
  authenticated: false,
  isLoggedIn: false,
  isRegistered: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setAuthenticated':
      return { ...state, authenticated: action.payload }
    case 'toggleLoginOpen':
      return { ...state, isLoggedIn: action.payload }
    case 'toggleRegisterOpen':
      return { ...state, isRegistered: action.payload }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, iState)

  const logOut = () => {
    dispatch({ type: 'setAuthenticated', payload: false })
    localStorage.clear()
  }

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          exact
          path="/barbers"
          component={(props) => <Barbers {...props} />}
        />
        <Route
          exact
          path="/booking"
          component={(props) => (
            <Booking {...props} iState={iState} dispatch={dispatch} />
          )}
        />
        <Route
          exact
          path="/loginPage"
          component={(props) => (
            <LogInPage {...props} iState={iState} dispatch={dispatch} />
          )}
        />
        <Route
          exact
          path="/services"
          component={(props) => <Services {...props} />}
        />
        <Route
          exact
          path="/account"
          component={(props) => <AccountPage {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
