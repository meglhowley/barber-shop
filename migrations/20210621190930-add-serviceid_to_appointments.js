'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('appointments', 'serviceId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'service_id',
      onDelete: 'CASCADE',
      references: {
        model: 'services',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('appointments', 'serviceId')
  }
}
