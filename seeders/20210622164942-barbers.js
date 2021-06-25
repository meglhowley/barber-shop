'use strict'
const moment = require('moment')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let startTime = 8
    let endTime = 17
    const times = { startTime: startTime, endTime: endTime }
    await queryInterface.bulkInsert(
      'barbers',
      [
        {
          firstName: 'Bobby',
          lastInitial: 'B',
          bigImage: 'https://i.imgur.com/skbQaks.jpg',
          smallImage: 'https://i.imgur.com/IpuryAc.jpg?1',
          availability: JSON.stringify({ startTime: 8, endTime: 16 }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Darrell',
          lastInitial: 'A',
          bigImage: 'https://i.imgur.com/Mn0BTqk.jpg',
          smallImage: 'https://i.imgur.com/rpyuUny.jpg?1',
          availability: JSON.stringify({ startTime: 11, endTime: 19 }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Dom',
          lastInitial: 'M',
          bigImage: 'https://i.imgur.com/9PRlpeJ.jpg',
          smallImage: 'https://i.imgur.com/1f4t1Ni.jpg',
          availability: JSON.stringify({ startTime: 10, endTime: 18 }),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: 'Mary',
          lastInitial: 'K',
          bigImage: 'https://i.imgur.com/CQmN4cv.png',
          smallImage: 'https://i.imgur.com/zwrkUR0.png',
          availability: JSON.stringify({ startTime: 11, endTime: 19 }),
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
