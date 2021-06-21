import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
    </div>
  )
}

export default App
