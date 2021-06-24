'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('appointments', 'startTime', {
      type: Sequelize.STRING
    })
    await queryInterface.changeColumn('appointments', 'userId', {
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('appointments', 'startTime')
    await queryInterface.changeColumn('appointments', 'userId', {
      allowNull: true
    })
  }
}
