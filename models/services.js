'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    static associate(models) {
      Services.hasMany(models.Appointment, {
        foreignKey: 'serviceId'
      })
    }
  }
  Services.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Services',
      tableName: 'services'
    }
  )
  return Services
}
