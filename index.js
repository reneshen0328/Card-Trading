const path = require("path");
const fs = require("fs").promises;

const { Card, Collector } = require("./Models/index");
const { db } = require("./db");

const seed = async () => {
  await db.sync({ force: true });

  const seedPathCard = path.join(__dirname, "./JSON/cards.json");
  const seedPathCollector = path.join(__dirname, "./JSON/collectors.json");

  const bufferCard = await fs.readFile(seedPathCard);
  const { dataCards } = JSON.parse(bufferCard);

  const bufferCollector = await fs.readFile(seedPathCollector);
  const { dataCollectors } = JSON.parse(bufferCollector);

  const cardPromises = dataCards.map((card) => Card.create(card));
  const collectorPromises = dataCollectors.map((collector) =>
    Collector.create(collector)
  );

  await Promise.all(cardPromises);
  await Promise.all(collectorPromises);

  console.log(`All of the cards and collectors have been created!`);
};

module.exports = { seed };
