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
        allowNull: true,
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
        //type: DataTypes.DATE,
        // get: function (value) {
        //   let currentDate = this.getDataValue(value)
        //   console.log(currentDate)
        //   return Moment(currentDate).utcOffset(-4)
        // }
      },
      //start: DataTypes.TIME,
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
