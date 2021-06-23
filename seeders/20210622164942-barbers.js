'use strict'
const moment = require('moment')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // let startTime = moment().hour(8).utcOffset(-4).format('HH:mm')
    // let endTime = moment().hour(8).utcOffset(-4).format('HH:mm')
    let startTime = 8
    let endTime = 17
    const times = { startTime: startTime, endTime: endTime }
    // const times = [...Array(7)].reduce((ac, next) => {
    //   let avail = {
    //     time: moment(start).utcOffset(-4)
    //   }
    //   start.add(1, 'hour')
    //   ac.push(avail)
    //   return ac
    // }, [])
    await queryInterface.bulkInsert(
      'barbers',
      [
        {
          firstName: 'Ernie',
          lastInitial: 'D',
          bigImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insideedition.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F2018-10%2F101218_oldest_barber_web_1.jpg&f=1&nofb=1',
          smallImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.recordonline.com%2Fstoryimage%2FTH%2F20170302%2FNEWS%2F170309820%2FAR%2F0%2FAR-170309820.jpg&f=1&nofb=1',
          availability: JSON.stringify(times),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Bobby',
          lastInitial: 'D',
          bigImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fz%2Fportrait-old-barber-smiling-hair-salon-26378362.jpg&f=1&nofb=1',
          smallImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insideedition.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F2018-10%2F101218_oldest_barber_web_1.jpg&f=1&nofb=1',
          availability: JSON.stringify(times),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Pasquali',
          lastInitial: 'D',
          bigImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insideedition.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F2018-10%2F101218_oldest_barber_web_1.jpg&f=1&nofb=1',
          smallImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insideedition.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2F2018-10%2F101218_oldest_barber_web_1.jpg&f=1&nofb=1',
          availability: JSON.stringify(times),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Dom',
          lastInitial: 'D',
          bigImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.capecodtimes.com%2Fstoryimage%2FCC%2F20151215%2FNEWS%2F151219610%2FAR%2F0%2FAR-151219610.jpg&f=1&nofb=1',
          smallImage:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nEOMuDcHj8YG6qOnznW7dAHaEf%26pid%3DApi&f=1',
          availability: JSON.stringify(times),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('barbers', null, {})
  }
}
