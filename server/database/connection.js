const { Sequelize } = require("sequelize");
const { config } = require("dotenv");
const pg = require('pg')

// setting up dotenv config
config()

const sequelize = new Sequelize(process.env.POSTGRESQL_URL, {
  logging: false,
  dialectModule: pg,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
});

module.exports = {
  sequelize
}
