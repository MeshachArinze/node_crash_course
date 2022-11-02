const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const User = new Sequelize("node-complete", "root", "tr@ilbl@zer123", {
  host: "localhost",
  dialect: "mysql",
});

try {
  module.exports = User;
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
