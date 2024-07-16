import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { authenticateDB } from "./database/authenticate.js";
import morgan from "morgan";

// setting up dotenv config
config();

// create express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

// routes

// initialize app
app.listen(process.env.PORT, () => {
  console.log("Server running!");
  authenticateDB();
});
