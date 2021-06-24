import { useEffect, useReducer } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const iState = {
  services: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setServices':
      return { ...state, services: action.payload }
    default:
      return state
  }
}

const Services = (props) => {
  const [state, dispatch] = useReducer(reducer, iState)

  useEffect(() => {
    findAllServices()
  }, [])

  const findAllServices = async () => {
    const res = await axios.get(`${BASE_URL}/services/all`)
    dispatch({ type: 'setServices', payload: res.data })
  }

  const servicesMapped = state.services.map((service, idx) => (
    <div key={idx}>
      <h2>{service.name}</h2>
      <p>{service.description}</p>
      <h3>${service.price}</h3>
    </div>
  ))

  return (
    <div>
      <div className="allServices">{servicesMapped}</div>
    </div>
  )
}

export default Services
