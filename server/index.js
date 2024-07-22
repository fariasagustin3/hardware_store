const express = require("express");
const cors = require("cors");
const { config } = require("dotenv");
const morgan = require("morgan");
const { authenticateDB } = require("./database/authenticate.js");
const productsRoute = require('./routes/products.js');
const categoriesRoute = require('./routes/categories.js');
const ordersRoute = require('./routes/orders.js');
const brandsRoute = require('./routes/brands.js');
const dataRoute = require('./routes/data.js');


// create express app
const app = express();
// setting up dotenv config
config();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

// routes
app.use("/api/products", productsRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/brands", brandsRoute);
app.use("/api/data", dataRoute);

// initialize app
app.listen(process.env.PORT || 3001, () => {
  console.log("Server running!");
  authenticateDB();
});
