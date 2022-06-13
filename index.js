// import file .env
require("dotenv").config();

// import express
const express = require("express");
const app = express();

//import cors
const cors = require("cors");

app.use(express.json());
app.use(cors());

//socket package
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // define client origin if both client and server have different origin
  },
});

require("./src/socket")(io);

// deklarasi port
const port = 5000;

// Get routes endpoint api
const router = require("./src/routes");

//endpoint group & router
// get api
app.use("/api/v1/", router);
// deklarasi folder upload untuk penyimpanan gambar
app.use("/uploads", express.static("uploads"));

// listen port
server.listen(port, () => console.log(`Listening on port ${port}!`));
