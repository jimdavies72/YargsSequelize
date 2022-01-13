//require("dotenv").config();
const { Sequelize } = require("sequelize");

// const connection = new Sequelize(
//   process.env.DB_DATABASE,
//   process.env.DB_USER,
//   process.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//   }
// );

//Michaels
// const connection = new Sequelize(
//   process.env.DB_DATABASE,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: process.env.DB_DIALECT,
//   }
// );

const connection = new Sequelize(process.env.DB_URI);

module.exports = connection;
