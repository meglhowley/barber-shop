import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Barbers from './pages/Barbers'
import Booking from './pages/Booking'

const App = () => {
  return (
    <div className="App">
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
      </Switch>
    </div>
  )
}

export default App
