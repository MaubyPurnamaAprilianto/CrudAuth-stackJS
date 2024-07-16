import db from "../config/Database.js";

const { DataTypes } = db.Sequelize;

const Category = db.define(
  "categories",
  {
    name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Category;