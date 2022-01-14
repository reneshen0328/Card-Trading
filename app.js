const express = require("express");
const app = express();

const { Card, Model } = require("./Models/index");
const { seed } = require("./index");
const PORT = 1000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`I'm getting data!`);
});

app.listen(PORT, async () => {
  await seed();
  console.log(`The server is listening through PORT: ${PORT}`);
});
