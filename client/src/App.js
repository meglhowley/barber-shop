import './App.css'
import { Route, Switch } from 'react-router-dom'
import { useReducer, useEffect } from 'react'
import Home from './pages/Home'
import Barbers from './pages/Barbers'
import Booking from './pages/Booking'
import AccountPage from './pages/AccountPage'
import Services from './pages/Services'
import Nav from './components/Nav'

const iState = {
  authenticated: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setAuthenticated':
      return { ...state, authenticated: action.payload }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, iState)
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
          component={(props) => <Booking {...props} />}
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
