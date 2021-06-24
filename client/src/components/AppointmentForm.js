import { Modal, Option, Picklist } from 'react-rainbow-components'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const AppointmentForm = (props) => {
  const [selectedBarber, setState] = useState({
    selectedBarber: {
      label: 'Any Barber',
      name: 'Option 0'
    }
  })
  const [selectedService, setSelectedService] = useState({
    selectedService: {
      label: 'Haircut',
      name: 'Option 0'
    }
  })
  const [barberId, setBarberId] = useState(null)
  const [serviceId, setServiceId] = useState(null)
  const [barberName, setBarberName] = useState('')
  const [serviceName, setServiceName] = useState('')

  const findBarberId = () => {
    let barberName = Object.values(selectedBarber)[0].label
    props.barbers.forEach((barber, index) => {
      if (barberName === barber.firstName) {
        setBarberId(barber.id)
        setBarberName(barber.firstName)
      }
    })
  }

  const findServiceId = () => {
    let serviceName = Object.values(selectedService)[0].label
    props.services.forEach((service, index) => {
      if (serviceName === service.name) {
        setServiceId(service.id)
        setServiceName(service.name)
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/appointment/create`, {
      barberId: barberId,
      serviceId: serviceId,
      date: props.selectedDate.toDateString(),
      duration: 60
    })
    console.log(res.data)
    props.dispatch({ type: 'toggleOpenApptForm', payload: false })
    props.history.push('/confirm')
  }

  const timeRange =
    parseInt(props.selectedTime) === 12
      ? `${props.selectedTime} - 01:00`
      : parseInt(props.selectedTime) + 1 < 10
      ? `${props.selectedTime} - 0${parseInt(props.selectedTime) + 1}:00`
      : `${props.selectedTime} - ${parseInt(props.selectedTime) + 1}:00`

  useEffect(() => {
    findBarberId()
  }, [selectedBarber])

  useEffect(() => {
    findServiceId()
    console.log(props)
  }, [selectedService])

  return (
    <div>
      <Modal
        className="appt-modal"
        isOpen={props.openApptForm}
        onRequestClose={() =>
          props.dispatch({ type: 'toggleOpenApptForm', payload: false })
        }
      >
        <div className="appt-title-div">
          <h1>{`Book An Appointment: ${props.selectedDate.toDateString()}`}</h1>
          <h2>{timeRange}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <Picklist
            className="picklist"
            onChange={(selectedBarber) => setState({ selectedBarber })}
            value={selectedBarber.selectedBarber}
            label="Select Your Barber"
          >
            <Option
              className="option"
              name={`Option 0`}
              label={'Any Barber'}
              value={'Any Barber'}
            />
            {props.barbers.map((barber, index) => (
              <Option
                className="option"
                name={`Option ${index + 1}`}
                label={`${barber.firstName}`}
                value={`${barber.firstName}`}
              />
            ))}
          </Picklist>
          <Picklist
            onChange={(selectedService) =>
              setSelectedService({ selectedService })
            }
            value={selectedService.selectedService}
            label="Select Your Service"
          >
            {props.services.map((service, index) => (
              <Option
                className="option"
                name={`option ${index}`}
                label={`${service.name}`}
              />
            ))}
          </Picklist>
          <div className="confirm-div">
            <h3>Please confirm the details below:</h3>
            <ul>
              <li>
                <u>{props.selectedDate.toDateString()}</u> from{' '}
                <u>{timeRange}</u>
              </li>
              <li>
                You will be working with <u>{barberName}</u>
              </li>
              <li>
                You will look and feel amazing after receiving a{' '}
                <u>{serviceName}</u>
              </li>
              <br />
              <li>We look forward to seeing you!</li>
            </ul>
          </div>
          <button className="confirm-btn">CONFIRM</button>
        </form>
      </Modal>
    </div>
  )
}

export default AppointmentForm
