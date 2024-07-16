import express from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
import { authenticateDB } from "./database/authenticate.js";
import productsRoute from './routes/products.js';
import categoriesRoute from './routes/categories.js';
import ordersRoute from './routes/orders.js';
import brandsRoute from './routes/brands.js';

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
app.use("/api/orders", ordersRoute);
app.use("/api/brands", brandsRoute);

// initialize app
app.listen(process.env.PORT, () => {
  console.log("Server running!");
  authenticateDB();
});
