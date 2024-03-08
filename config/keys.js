const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose.set("strictQuery", false);

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/futboll");
    mongoose.useUnifiedTopology = true;
    mongoose.useNewUrlParser = true;
    console.log("Connected to Database ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDB;
