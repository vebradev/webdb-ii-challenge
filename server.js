const express = require("express");
const db = require("./data/dbConfig");
const carsRouter = require("./routes/cars");

const server = express();
server.use(express.json());

server.use("/api/cars", carsRouter);

module.exports = server;
