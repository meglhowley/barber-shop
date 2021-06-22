'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('barbers', 'availability', {
      type: Sequelize.JSONB
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('barbers', 'availabilty')
  }
}
