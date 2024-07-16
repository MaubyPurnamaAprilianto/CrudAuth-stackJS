import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";  
import Category from "./models/CategoryModel.js";
import Auth from "./models/AuthModel.js";
import Product from "./models/ProductModel.js";
import Users from "./models/UserModel.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

try {
  await db.authenticate();
  console.log("Database connected...");
  await Category.sync();
  await Auth.sync();
  await Product.sync();
  await Users.sync();
} catch (error) {
  console.error("Connection error:", error);
}

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
