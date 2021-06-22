import Nav from '../components/Nav'
import { useState, useEffect } from 'react'

const allBarbers = [
  {
    firstName: 'Ernie',
    lastInitial: 'D',
    bigImgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insideedition.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F2018-10%2F101218_oldest_barber_web_1.jpg&f=1&nofb=1',
    smallImgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.recordonline.com%2Fstoryimage%2FTH%2F20170302%2FNEWS%2F170309820%2FAR%2F0%2FAR-170309820.jpg&f=1&nofb=1'
  },
  {
    firstName: 'Bobby',
    lastInitial: 'D',
    bigImgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fportrait-old-barber-smiling-hair-salon-26378362.jpg&f=1&nofb=1',
    smallImgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fsenior-man-shows-surprised-smile-facial-expression-isolated-on-white-picture-id891322800%3Fk%3D6%26m%3D891322800%26s%3D612x612%26w%3D0%26h%3DckDSvni7-FvCgbB-2hg02_biPq0LHdmSPwGiSE65uWU%3D&f=1&nofb=1'
  },
  {
    firstName: 'Pasquali',
    lastInitial: 'D',
    bigImgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbloximages.chicago2.vip.townnews.com%2Fnwitimes.com%2Fcontent%2Ftncms%2Fassets%2Fv3%2Feditorial%2F6%2Fb2%2F6b2872db-34c9-56db-bbc9-84d09bab2d69%2F5a524dde2a108.image.jpg%3Fresize%3D1200%252C791&f=1&nofb=1',
    smallImgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Fhandsome-italian-old-man-picture-id522294699%3Fk%3D6%26m%3D522294699%26s%3D170667a%26w%3D0%26h%3DfmG5OKlJO8Ow43A4dJxhfyPAvK90KqHUbMeYlWo3R3Y%3D&f=1&nofb=1'
  },
  {
    firstName: 'Dom',
    lastInitial: 'D',
    bigImgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.capecodtimes.com%2Fstoryimage%2FCC%2F20151215%2FNEWS%2F151219610%2FAR%2F0%2FAR-151219610.jpg&f=1&nofb=1',
    smallImgUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nEOMuDcHj8YG6qOnznW7dAHaEf%26pid%3DApi&f=1'
  }
]

const Barbers = () => {
  const [selectedBarber, setSelectedBarber] = useState(allBarbers[1])
  const [barberList, setBarberList] = useState(null)

  useEffect(() => {
    setBarberList(allBarbers)
    setSelectedBarber(allBarbers[3])
    console.log(selectedBarber)
    console.log(barberList)
  }, [selectedBarber])

  const barbersMap = allBarbers.map((barber, idx) => (
    <div key={idx}>
      <p>Barber #: {idx}</p>
      <img src={barber.smallImgUrl} height="200" />
      <h2>
        {barber.firstName} {barber.lastInitial}
      </h2>
    </div>
  ))

  // console.log(allBarbers[1])

  return (
    <div>
      <Nav />
      Barbers Page
      <div className="selectedBarber">
        Selected Barber: <img src={selectedBarber.bigImgUrl} />
        <h1>
          {selectedBarber.firstName} {selectedBarber.lastInitial}
        </h1>
      </div>
      <div className="allBarbers">{barbersMap}</div>
    </div>
  )
}

export default Barbers
