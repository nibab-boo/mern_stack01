require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/api/books");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// use the cors middleware with the
// origin and credential options
app.use(cors({origin: true, credential: true}));

// use the body-parser middleware to parson JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api/books path
app.use("/api/books", routes);

// Connect Database
connectDB();

const PORT = process.env.PORT || 8082;

app.get("/", (req, res) => res.send("Hello, from Server"));

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}.`));