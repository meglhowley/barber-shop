'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('appointments', 'date', {
      type: Sequelize.STRING
    })
    await queryInterface.removeColumn('appointments', 'start')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('appointments', 'date', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('appointments', 'start', {
      type: Sequelize.TIME
    })
  }
}
