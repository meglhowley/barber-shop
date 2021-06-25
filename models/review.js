'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  Review.init(
    {
      userId: DataTypes.INTEGER,
      star: DataTypes.INTEGER,
      content: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
