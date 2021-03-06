const { db, DataTypes, Model } = require("../db");

class Collector extends Model {}

Collector.init(
  {
    name: DataTypes.STRING,
    budget: DataTypes.NUMBER,
  },
  {
    sequelize: db,
  }
);

module.exports = { Collector };
