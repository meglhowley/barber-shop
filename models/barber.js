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
      //   Provider.belongsToMany(models.User, {
      //     through: models.Appointment,
      //     foreignKey: 'providerId',
      //     as: 'customer'
      //   })
      Barber.belongsToMany(models.User, {
        through: models.Appointment,
        foreignKey: 'barberId',
        as: 'customer'
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

// static associate(models) {
//   // define association here
//   Provider.belongsToMany(models.User, {
//     through: models.Appointment,
//     foreignKey: 'providerId',
//     as: 'customer'
//   })
// }
// }
// Provider.init(
// {
//   name: DataTypes.STRING,
//   availability: DataTypes.JSONB
// },
// {
//   sequelize,
//   modelName: 'Provider',
//   tableName: 'providers'
