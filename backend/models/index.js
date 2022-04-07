const fs = require("fs");
const { dirname } = require("path");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
  
db.University.hasOne(db.Address, {onDelete: "cascade"}); 
//db.Address.belongsTo(db.University, {onDelete: "cascade"}); 

const UniversityDepartment = sequelize.define("university_department", {}, {timestamps: false});
db.University.belongsToMany(db.Department, {through: "university_department", foreignKey: "university_id"});
db.Department.belongsToMany(db.University, {through: "university_department", foreignKey: "department_id"});

db.Department.hasMany(db.Degree);
db.Degree.belongsTo(db.Department, {foreignKey: "department_id"})

const DegreeCourse = sequelize.define("degree_course", {}, {timestamps: false});
db.Degree.belongsToMany(db.Course, {through: "degree_course", foreignKey: "degree_id"});
db.Course.belongsToMany(db.Degree, {through: "degree_course", foreignKey: "course_id"});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
