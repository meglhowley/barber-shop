'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      // User.belongsToMany(models.Barber, {
      //   through: models.Appointment,
      //   foreignKey: 'userId',
      //   as: 'barber'
      // })
      User.hasMany(models.Appointment, {
        foreignKey: 'userId'
      })
      User.hasMany(models.Review, {
        foreignKey: 'userId'
      })
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}

// static associate(models) {
//   // define association here
//   User.belongsToMany(models.Provider, {
//     through: models.Appointment,
//     foreignKey: 'userId',
//     as: 'provider'
//   })
// }
// }
// User.init(
// {
//   name: DataTypes.STRING,
//   email: DataTypes.STRING
// },
// {
//   sequelize,
//   modelName: 'User',
//   tableName: 'users'
