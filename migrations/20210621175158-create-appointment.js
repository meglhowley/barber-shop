'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      barberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'barber_id',
        onDelete: 'CASCADE',
        references: {
          model: 'barbers',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      date: {
        type: Sequelize.DATE
      },
      start: {
        type: Sequelize.TIME
      },
      duration: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('appointments')
  }
}
