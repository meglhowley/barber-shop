import './App.css'
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Barbers from './pages/Barbers'
import Booking from './pages/Booking'
import AccountPage from './pages/AccountPage'
import Services from './pages/Services'
import Nav from './components/Nav'
import LogIn from './components/LogIn'
import Register from './components/Register'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loginOpen, toggleLoginOpen] = useState(false)
  const [registerOpen, toggleRegisterOpen] = useState(false)

  const logOut = () => {
    setAuthenticated(false)
    localStorage.clear()
  }

  const getToken = () => {
    let token = localStorage.getItem('token')
    if (token) {
      return setAuthenticated(true)
    }
  }

  useEffect(() => {
    getToken()
    console.log(authenticated)
  }, [])

  return (
    <div className="App">
      <header>
        <Route
          path="/"
          component={(props) => (
            <Nav
              {...props}
              toggleLoginOpen={toggleLoginOpen}
              toggleRegisterOpen={toggleRegisterOpen}
              authenticated={authenticated}
              logOut={logOut}
            />
          )}
        />
        <LogIn
          loginOpen={loginOpen}
          toggleLoginOpen={toggleLoginOpen}
          setAuthenticated={setAuthenticated}
        />
        <Register
          registerOpen={registerOpen}
          toggleRegisterOpen={toggleRegisterOpen}
          setAuthenticated={setAuthenticated}
        />
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
