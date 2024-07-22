const { sequelize } = require("./connection.js");
const { setupRelations } = require("./relations.js");

const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    setupRelations();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  authenticateDB
}
