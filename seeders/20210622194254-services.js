'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'services',
      [
        {
          name: 'Haircut',
          price: 10,
          description: `Not just your average haircut - you're gonna like the way you look, we guarantee it.`,
          duration: 30
        },
        {
          name: 'Beard Trim',
          price: 15,
          description:
            'Get cleaned up with a straight razor shave and some beard oil.',
          duration: 30
        },
        {
          name: 'Hair Coloring',
          price: 30,
          description: 'Want to look like Tekashi 6ix9ine? Now you can',
          duration: 30
        },
        {
          name: 'Fade',
          price: 30,
          description: "The cleanest fade you'll ever see",
          duration: 30
        },
        {
          name: 'Black Mask',
          price: 20,
          description:
            'Clean out your pores and say hello to smooth skin with one of our signature black masks',
          duration: 30
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('services', null, {})
  }
}
