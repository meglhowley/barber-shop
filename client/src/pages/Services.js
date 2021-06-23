import Nav from '../components/Nav'
import { useEffect, useState, useReducer } from 'react'
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
  // const barberServices = [
  //   {
  //     serviceName: 'Haircut',
  //     servicePrice: 10,
  //     serviceDescription: `Not just your average haircut - you're gonna like the way you look, we guarantee it.`
  //   },
  //   {
  //     serviceName: 'Beard Trim',
  //     servicePrice: 15,
  //     serviceDescription:
  //       'Get cleaned up with a straight razor shave and some beard oil.'
  //   },
  //   {
  //     serviceName: 'Hair Coloring',
  //     servicePrice: 30,
  //     serviceDescription: 'Want to look like Tekashi 6ix9ine? Now you can'
  //   },
  //   { serviceName: 'Fade', servicePrice: 8, serviceDescription: '' },
  //   {
  //     serviceName: 'Black Mask',
  //     servicePrice: 20,
  //     serviceDescription:
  //       'Clean out your pores and say hello to smooth skin with one of our signature black masks'
  //   }
  // ]

  // const [services, setServices] = useState(null)
  const [state, dispatch] = useReducer(reducer, iState)

  useEffect(() => {
    findAllServices()
  }, [])

  const findAllServices = async () => {
    const res = await axios.get(`${BASE_URL}/services/all`)
    dispatch({ type: 'setServices', payload: res.data })
    // console.log(state.services)
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
