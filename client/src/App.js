import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Barbers from './pages/Barbers'
import Booking from './pages/Booking'
import AccountPage from './pages/AccountPage'
import Services from './pages/Services'
import Nav from './components/Nav'

const App = () => {
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
