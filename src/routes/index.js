//import express
const express = require("express");

//create router by express
const router = express.Router();

//import controller user
const {
  addUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user");

// Import controller auth
const { register, login, checkAuth } = require("../controllers/auth");

// Import controller product
const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

// Import controller transaction
const {
  getTransactions,
  addTransaction,
  notification,
} = require("../controllers/transaction");

// Import controller categories
const {
  getCategories,
  addCategory,
  updateCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/category");

// Import controller profile
const { getProfile, updateProfile } = require("../controllers/profile");

// Middleware
const { auth } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");

// Route
//end point user
router.post("/user", addUser);
router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.patch("/user/:id", auth, updateUser);
router.delete("/user/:id", deleteUser);

//end point auth
router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);

//end point profile
router.get("/profile", auth, getProfile);
router.patch("/profile", auth, uploadFile("image"), updateProfile);

//end point product
router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", auth, uploadFile("image"), addProduct);
router.patch("/product/:id", auth, uploadFile("image"), updateProduct);
router.delete("/product/:id", auth, deleteProduct);

//end point transaction
router.get("/transactions", auth, getTransactions);
router.post("/transaction", auth, addTransaction);

//end point notification
router.post("/notification", notification);

//end point categories
router.get("/categories", auth, getCategories);
router.get("/category/:id", auth, getCategory);
router.post("/category", auth, addCategory);
router.patch("/category/:id", auth, updateCategory);
router.delete("/category/:id", auth, deleteCategory);

module.exports = router;
