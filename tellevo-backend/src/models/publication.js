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
        as: 'driver'
      });
      this.hasMany(models.user, {
        foreignKey: 'id', as: 'passenger_id_1',
        foreignKey: 'id', as: 'passenger_id_2',
        foreignKey: 'id', as: 'passenger_id_3',
        foreignKey: 'id', as: 'passenger_id_4'
      });
    }
  }
  publication.init({
    idUser: DataTypes.INTEGER,
    start: DataTypes.STRING,
    end: DataTypes.STRING,
    date: DataTypes.DATE,
    available_seats: DataTypes.INTEGER,
    price: DataTypes.BIGINT,
    passenger_id_1: DataTypes.INTEGER,
    passenger_id_2: DataTypes.INTEGER,
    passenger_id_3: DataTypes.INTEGER,
    passenger_id_4: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'publication',
  });
  return publication;
};