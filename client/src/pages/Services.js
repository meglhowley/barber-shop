import Nav from '../components/Nav'

const Services = () => {
  const barberServices = [
    {
      serviceName: 'Haircut',
      servicePrice: 10,
      serviceDescription: `Not just your average haircut - you're gonna like the way you look, we guarantee it.`
    },
    {
      serviceName: 'Beard Trim',
      servicePrice: 15,
      serviceDescription:
        'Get cleaned up with a straight razor shave and some beard oil.'
    },
    {
      serviceName: 'Hair Coloring',
      servicePrice: 30,
      serviceDescription: 'Want to look like Tekashi 6ix9ine? Now you can'
    },
    { serviceName: 'Fade', servicePrice: 8, serviceDescription: '' },
    {
      serviceName: 'Black Mask',
      servicePrice: 20,
      serviceDescription:
        'Clean out your pores and say hello to smooth skin with one of our signature black masks'
    }
  ]

  const servicesMapped = barberServices.map((service, idx) => (
    <div key={idx}>
      <h2>{service.serviceName}</h2>
      <p>{service.serviceDescription}</p>
      <h3>${service.servicePrice}</h3>
    </div>
  ))

  return (
    <div>
      <Nav />
      Services Page
      <div className="allServices">{servicesMapped}</div>
    </div>
  )
}

export default Services
