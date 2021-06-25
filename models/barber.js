'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Barber extends Model {
    static associate(models) {
      Barber.hasMany(models.Appointment, {
        foreignKey: 'barberId'
      })
    }
  }
  Barber.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastInitial: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bigImage: {
        type: DataTypes.STRING,
        allowNull: false
      },
      smallImage: {
        type: DataTypes.STRING,
        allowNull: false
      },
      availability: {
        type: DataTypes.JSONB,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Barber',
      tableName: 'barbers'
    }
  )
  return Barber
}
