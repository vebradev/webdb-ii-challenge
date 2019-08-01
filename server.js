const express = require("express");
const carsRouter = require("./routes/cars");

const server = express();
server.use(express.json());

server.use("/api/cars", carsRouter);

module.exports = server;
