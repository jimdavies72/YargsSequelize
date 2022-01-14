const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../db/connection");
const {
  setApproval,
  firstUpper,
  setLower,
  setUpper,
} = require("./modelHelpers");

const Movie = connection.define("Movies", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("title", setLower(value));
    },
    get() {
      const rawValue = this.getDataValue("title");
      return firstUpper(rawValue);
    },
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("actor", setUpper(value));
    },
    get() {
      const rawValue = this.getDataValue("actor");
      return firstUpper(rawValue);
    },
  },
  approval: {
    type: DataTypes.STRING,
    allowNull: false,
    get() {
      const rawValue = this.getDataValue("approval");
      return firstUpper(rawValue);
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    set(value) {
      this.setDataValue("approval", setApproval(value));
      this.setDataValue("rating", value);
    },
  },
});

const Admin = connection.define("Admin", {
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  Movie,
  Admin,
};
