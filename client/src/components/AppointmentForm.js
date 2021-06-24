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

  const findBarberId = () => {
    let barberName = Object.values(selectedBarber)[0].label
    props.barbers.forEach((barber, index) => {
      if (barberName === barber.firstName) {
        setBarberId(barber.id)
      }
    })
  }

  const findServiceId = () => {
    let serviceName = Object.values(selectedService)[0].label
    props.services.forEach((service, index) => {
      if (serviceName === service.name) {
        setServiceId(service.id)
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(`${BASE_URL}/appointment/create`, {
      barberId: barberId,
      userId: props.userId,
      serviceId: serviceId,
      date: props.selectedDate.toDateString(),
      duration: 60
    })
    console.log(res.data)
    localStorage.setItem('token', res.data.token)
  }

  useEffect(() => {
    findBarberId()
  }, [selectedBarber])

  useEffect(() => {
    findServiceId()
  }, [selectedService])

  return (
    <div>
      <Modal
        isOpen={props.openApptForm}
        onRequestClose={() =>
          props.dispatch({ type: 'toggleOpenApptForm', payload: false })
        }
      >
        <h1>Book An Appointment</h1>
        <form onSubmit={handleSubmit}>
          <Picklist
            onChange={(selectedBarber) => setState({ selectedBarber })}
            value={selectedBarber.selectedBarber}
            label="Select Your Barber"
          >
            <Option
              name={`Option 0`}
              label={'Any Barber'}
              value={'Any Barber'}
            />
            {props.barbers.map((barber, index) => (
              <Option
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
              <Option name={`option ${index}`} label={`${service.name}`} />
            ))}
          </Picklist>
          <button>Submit</button>
        </form>
      </Modal>
    </div>
  )
}

export default AppointmentForm
