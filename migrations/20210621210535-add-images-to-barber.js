'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('barbers', 'bigImage', {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'big_image',
      onDelete: 'CASCADE'
    })
    await queryInterface.addColumn('barbers', 'smallImage', {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'small_image',
      onDelete: 'CASCADE'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('barbers', 'bigImage')
    await queryInterface.removeColumn('barbers', 'smallImage')
  }
}
