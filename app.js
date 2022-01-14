const express = require("express");
const app = express();

const { Card , Model } = require("./Models/index")
const PORT = 1000;

app.use(express.json());