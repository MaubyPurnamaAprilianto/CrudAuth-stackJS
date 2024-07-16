import { Sequelize } from "sequelize";

// Sesuaikan nama database, username, dan password dengan konfigurasi PostgreSQL Anda
const db = new Sequelize("crud_db", "postgres", "purnama01", {
  host: "localhost",
  dialect: "postgres",
  port: 2007,
});

export default db;
