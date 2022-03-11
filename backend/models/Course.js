'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     // Course.belongsTo(models.Degree);
    }
  }
  Course.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
    },
    degree_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      model: "degree",
      key: "id",
    }
  }, {
    sequelize,
    modelName: 'Course',
    tableName: "course",
    timestampes: true,
    underscored: true
  });
  return Course;
};