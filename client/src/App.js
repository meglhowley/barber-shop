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
import axios from 'axios'
import { BASE_URL } from './globals'
import Reviews from './pages/Reviews'
import ConfirmPage from './pages/ConfirmPage'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [loginOpen, toggleLoginOpen] = useState(false)
  const [registerOpen, toggleRegisterOpen] = useState(false)
  const [loginForm, handleLoginForm] = useState({
    email: '',
    password: ''
  })
  //const [userId, setUserId] = useState(null)
  const [loginError, setLoginError] = useState('')

  const logOut = () => {
    setAuthenticated(false)
    //setUserId(null)
    localStorage.clear()
  }

  const getToken = () => {
    let token = localStorage.getItem('token')
    if (token) {
      return setAuthenticated(true)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    handleLoginForm({ ...loginForm, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, loginForm)
      console.log(res)
      localStorage.setItem('token', res.data.token)
      handleLoginForm({ email: '', password: '' })
      toggleLoginOpen(false)
      setAuthenticated(true)
      //setUserId(res.data.user.id)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getToken()
  }, [])

  // useEffect(() => {
  //   console.log(authenticated)
  //   console.log(userId)
  // }, [userId])

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
          loginForm={loginForm}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          loginError={loginError}
        />
        <Register
          registerOpen={registerOpen}
          toggleRegisterOpen={toggleRegisterOpen}
          setAuthenticated={setAuthenticated}
          toggleLoginOpen={toggleLoginOpen}
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
          component={(props) => (
            <Booking {...props} authenticated={authenticated} />
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
        <Route
          exact
          path="/reviews"
          component={(props) => (
            <Reviews {...props} authenticated={authenticated} />
          )}
        />
        <Route
          exact
          path="/confirm"
          component={(props) => <ConfirmPage {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
