'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Degree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     // Degree.belongsTo(models.Department);
     // Degree.hasMany(models.Course);
    }
  }
  Degree.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    degree_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      model: "department",
      key: "id",
    }
  }, {
    sequelize,
    modelName: 'Degree',
    tableName: "degree",
    timestampes: true,
    underscored: true
  });
  return Degree;
};