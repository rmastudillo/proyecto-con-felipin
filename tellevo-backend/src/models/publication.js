'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey: 'idUser',
        as: 'user'
      })
    }
  }
  publication.init({
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    date: DataTypes.DATE,
    available_seats: DataTypes.INTEGER,
    price: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'publication',
  });
  return publication;
};