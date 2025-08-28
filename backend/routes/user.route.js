import express from "express";

import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";
const user = express.Router();

user.get("/", getUser);
user.post("/", createUser);
user.put("/:id", updateUser);
user.delete("/:id", deleteUser);

export default user;
