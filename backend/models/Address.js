'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //  Address.belongsTo(models.University);
    }
  }
  Address.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
    },
    zip: {
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    university_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      model: "university",
      key: "id",
    }
  }, {
    sequelize,
    modelName: 'Address',
    tableName: "address",
    timestampes: true,
    underscored: true
  });
  return Address;
};