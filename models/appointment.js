'use strict'
const { Model } = require('sequelize')
const Moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Appointment.belongsTo(models.Barber, {
        foreignKey: 'barberId'
      })
      Appointment.belongsTo(models.Services, {
        foreignKey: 'serviceId'
      })
    }
  }
  Appointment.init(
    {
      barberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'barbers',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        onDelete: 'CASCADE',
        references: {
          model: 'services',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.STRING
      },
      startTime: DataTypes.STRING,
      duration: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Appointment',
      tableName: 'appointments'
    }
  )
  return Appointment
}
