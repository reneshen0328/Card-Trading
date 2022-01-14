const { DataTypes, Model } = require("../db");

class Card extends Model {}

Card.init({
  name: DataTypes.STRING,
  deck: DataTypes.STRING,
  imgurl: DataTypes.STRING,
  price: DataTypes.NUMBER,
});

module.exports = { Card };
