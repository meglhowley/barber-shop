'use strict'
const { Model } = require('sequelize')
const Moment = require('moment')
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Appointment.belongsTo(models.Barber, {
        foreignKey: 'barber_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Appointment.belongsTo(models.Service, {
        foreignKey: 'service_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Appointment.init(
    {
      barberId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'barber_id',
        onDelete: 'CASCADE',
        references: {
          model: 'barbers',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      serviceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'service_id',
        onDelete: 'CASCADE',
        references: {
          model: 'services',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        get: function (value) {
          let currentDate = this.getDataValue(value)
          console.log(currentDate)
          return Moment(currentDate).utcOffset(-4)
        }
      },
      start: DataTypes.TIME,
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
