import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
const product = express.Router();

product.get("/", getProduct);
product.post("/", createProduct);
product.put("/:id", updateProduct);
product.delete("/:id", deleteProduct);

export default product;
