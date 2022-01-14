const path = require("path");
const fs = require("fs").promises;

const { Card,Collector } = require("./Models/index");
const { db } = require("./db")

async function seed(){
    await db.sync({ force:true });


}