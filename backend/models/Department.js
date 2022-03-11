'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     // Department.belongsTo(models.University);
     // Department.hasMany(models.Degree);
    }
  }
  Department.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    univeristy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      model: "university",
      key: "id",
    }
  }, {
    sequelize,
    modelName: 'Department',
    tableName: "department",
    timestampes: true,
    underscored: true
  });
  return Department;
};