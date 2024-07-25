  import { Sequelize } from "sequelize";
  import db from "../config/Database.js";

  const { DataTypes } = Sequelize;

  const Auth = db.define(
    "auth",
    {
      username: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      level: {
        type: DataTypes.INTEGER,
      },
      refresh_token: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true,
    }
  );

  export default Auth;
