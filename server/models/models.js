const sequelize = require("../db.js");
const { DataTypes } = require("sequelize");

const Usere = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "STUDENT" },
});

const UsereInfo = sequelize.define("userInfo", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  firstName: { type: DataTypes.STRING, unique: true, allowNull: false },
  lastName: { type: DataTypes.STRING, unique: true },
  country: { type: DataTypes.STRING, unique: true, allowNull: false },
  pilotLicense: { type: DataTypes.STRING, unique: true, allowNull: false },
  pasport: { type: DataTypes.STRING },
  phone: { type: DataTypes.INTEGER },
  works: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Country = sequelize.define("coutry", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Course = sequelize.define("course", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const SubTema = sequelize.define("subtema", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  parentId: { type: DataTypes.INTEGER, allowNull: true },
});

const SubTemaNote = sequelize.define("subtemainfo", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING, unique: true },
  img: { type: DataTypes.STRING },
});

const Question = sequelize.define("question", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  img: { type: DataTypes.STRING },
  answer: { type: DataTypes.ARRAY(DataTypes.TEXT), allowNull: false },
});

const UsereCourse = sequelize.define("user_course", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Usere.hasMany(UsereInfo);
Usere.belongsTo(Usere);

UsereInfo.hasOne(Country);
Country.belongsTo(UsereInfo);

Usere.belongsToMany(Course, { through: UsereCourse });
Course.belongsToMany(Usere, { through: UsereCourse });

Course.hasMany(SubTema);
SubTema.belongsTo(Course);

SubTema.hasMany(SubTemaNote);
SubTemaNote.belongsTo(SubTema);

SubTema.hasMany(Question);
Question.belongsTo(SubTema);

module.exports = {
  Usere,
  Course,
  SubTema,
  SubTemaNote,
  Question,
  UsereCourse,
  UsereInfo,
  Country,
};
