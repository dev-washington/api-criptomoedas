'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transactions.init({
    value: DataTypes.FLOAT,
    datetime: DataTypes.DATETIME,
    sendTO: DataTypes.STRING,
    receiveFrom: DataTypes.STRING,
    currentCotation: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};