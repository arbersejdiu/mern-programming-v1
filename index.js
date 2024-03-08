const express = require("express");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const homeRoute = require("./routes/home");
const editRoute = require("./routes/edit");
const connectDB = require("./config/keys.js");
// Connecto to DB
connectDB();
const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", homeRoute);

app.use("/edit", editRoute);
