import { Sequelize } from "sequelize";
import { config } from "dotenv";

// setting up dotenv config
config()

export const sequelize = new Sequelize(process.env.POSTGRESQL_URL, {
  logging: false,
  // ssl: {
  //   require: true,
  //   rejectUnauthorized: false
  // }
});
