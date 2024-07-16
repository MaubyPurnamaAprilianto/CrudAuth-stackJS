import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
import { getAuth, Register, Login } from "../controllers/AuthController.js";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getCategories,
} from "../controllers/ProductController.js";

import {
  getCategorie,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
} from "../controllers/CategoryController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser); // Hapus trailing slash
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

router.get("/auth", getAuth);
router.post("/auth/register", Register); // Ganti /auth dengan /auth/register untuk konsistensi
router.post("/auth/login", Login);

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/categorys", getCategorie);
router.get("/categorys/:id", getCategoryById);
router.post("/categorys", createCategory);
router.patch("/categorys/:id", updateCategory);
router.delete("/categorys/:id", deleteCategory);

export default router;
