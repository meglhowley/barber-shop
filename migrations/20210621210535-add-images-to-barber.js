'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('barbers', 'bigImage', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.addColumn('barbers', 'smallImage', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('barbers', 'bigImage')
    await queryInterface.removeColumn('barbers', 'smallImage')
  }
}
