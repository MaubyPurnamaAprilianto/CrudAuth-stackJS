import db from "../config/Database.js";

const { DataTypes } = db.Sequelize;

const Product = db.define(
  "products",
  {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    category: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Product;