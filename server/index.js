import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
import { authenticateDB } from "./database/authenticate.js";
import productsRoute from './routes/products.js';
import categoriesRoute from './routes/categories.js';

// setting up dotenv config
config();

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

// routes
app.use("/api/products", productsRoute);
app.use("/api/categories", categoriesRoute);

// initialize app
app.listen(process.env.PORT, () => {
  console.log("Server running!");
  authenticateDB();
});