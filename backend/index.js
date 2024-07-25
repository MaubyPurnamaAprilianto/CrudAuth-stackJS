import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
// import db from "./config/Database.js";
// import Auth from "./models/AuthModel.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// const connectToDatabase = async () => {
//   try {
//     await db.authenticate();
//     console.log("Database connected...");
//     await Auth.sync({ alter: true });  // Menambahkan kolom baru tanpa menghapus data yang ada
//   } catch (error) {
//     console.error("Connection error:", error);
//   }
// };

// connectToDatabase();

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
