'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Services.hasMany(models.Appointment, {
        foreignKey: 'service_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
