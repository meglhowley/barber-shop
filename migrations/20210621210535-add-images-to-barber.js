'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('barbers', 'bigImage', {
      type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    })
    await queryInterface.addColumn('barbers', 'smallImage', {
      type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('barbers', 'bigImage')
    await queryInterface.removeColumn('barbers', 'smallImage')
  }
}
