'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Barber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Barber.hasMany(models.Appointment, {
        foreignKey: 'barber_id'
      })
    }
  }
  Barber.init(
    {
      firstName: {
        //field: 'first_name',
        type: DataTypes.STRING,
        allowNull: false
      },
      lastInitial: {
        //field: 'last_initial',
        type: DataTypes.STRING,
        allowNull: false
      },
      bigImage: {
        //field: 'big_image',
        type: DataTypes.STRING,
        allowNull: false
      },
      smallImage: {
        //field: 'small_image',
        type: DataTypes.STRING,
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
