import express from "express";
import dotenv from "dotenv";
import connetctDB from "./config/db.js";
import router from "./routes/productRoutes.js";

const app = express();
dotenv.config();
connetctDB();

app.use("/api/products", router);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
