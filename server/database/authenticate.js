import { sequelize } from "./connection.js";
import { setupRelations } from "./relations.js";

export const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    setupRelations();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
