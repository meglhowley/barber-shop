import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const iState = {
  selectedBarber: [],
  barbers: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setBarbers':
      return { ...state, barbers: action.payload }
    case 'setSelectedBarber':
      return { ...state, selectedBarber: action.payload }
    default:
      return state
  }
}

const Barbers = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)

  useEffect(() => {
    findAllBarbers()
  }, [])

  const findAllBarbers = async () => {
    const res = await axios.get(`${BASE_URL}/barber/all`)
    dispatch({ type: 'setBarbers', payload: res.data })
    dispatch({ type: 'setSelectedBarber', payload: res.data[0] })
  }

  const barbersMap = state.barbers.map((barber, idx) => (
    <div
      onClick={() => {
        dispatch({ type: 'setSelectedBarber', payload: { ...barber } })
      }}
      key={idx}
    >
      <img src={barber.smallImage} height="100" width="100" />
      <h2>
        {barber.firstName} {barber.lastInitial}
      </h2>
    </div>
  ))

  return (
    <div className="barberPageContainer">
      <div className="selectedBarber">
        <img src={state.selectedBarber.bigImage} />
        <h1>
          {state.selectedBarber.firstName} {state.selectedBarber.lastInitial}
        </h1>
      </div>
      <div className="allBarbers">{barbersMap}</div>
    </div>
  )
}

export default Barbers
