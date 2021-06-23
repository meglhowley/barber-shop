import { Modal, Option, Picklist } from 'react-rainbow-components'
import { useState, useEffect } from 'react'

const AppointmentForm = (props) => {
  const [selectedBarber, setSelectedBarber] = useState(null)
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    console.log(props)
    console.log(props.openApptForm)
  }, [])

  return (
    <div>
      <Modal
        isOpen={props.openApptForm}
        onRequestClose={() =>
          props.dispatch({ type: 'toggleOpenApptForm', payload: false })
        }
      >
        <h1>Book An Appointment</h1>
        <form>
          <Picklist
            onChange={(value) => setSelectedBarber({ value })}
            value={selectedBarber}
            label="Select Your Barber"
          >
            <Option name="header" label="Select Your Barber" variant="header" />
            {props.barbers.map((barber, index) => (
              <Option name={`option ${index}`} label={`${barber.firstName}`} />
            ))}
          </Picklist>
          <Picklist
            onChange={(value) => setSelectedService({ value })}
            value={selectedService}
            label="Select Your Service"
          >
            <Option
              name="header"
              label="Select Your Service"
              variant="header"
            />
            {props.services.map((service, index) => (
              <Option name={`option ${index}`} label={`${service.name}`} />
            ))}
          </Picklist>
        </form>
      </Modal>
    </div>
  )
}

export default AppointmentForm
