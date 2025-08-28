import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./config/db.js";
import product from "./routes/product.route.js";
import user from "./routes/user.route.js";

const app = express();

app.use(express.json());

app.use("/api/products", product);
app.use("/api/users", user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server listen from port http://localhost:${PORT}`);
});
