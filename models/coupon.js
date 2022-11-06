'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coupon.init({
    tag: DataTypes.STRING,
    minPrice: DataTypes.INTEGER,
    minItem: DataTypes.INTEGER,
    discountAmountOff:{
      type: DataTypes.FLOAT,
      allowNull: true
    }, 
    discountPercentOff:{
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};