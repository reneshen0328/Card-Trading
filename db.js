const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./card_trading.db",
  logging: false,
});

module.exports = { db, DataTypes, Model };
