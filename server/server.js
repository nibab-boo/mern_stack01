require('dotenv').config();
const express = require("express");
const connectDB = require("../config/db");
const app = express();

// Connect Database
connectDB

const PORT = process.env.PORT || 8082;

app.get("/", (req, res) => res.send("Hello, from Server"));

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}.`));