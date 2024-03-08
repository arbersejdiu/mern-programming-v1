const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("edit.ejs");
});

router.get("/", async (req, res) => {
  try {
    const data = await Club.find();
    res.render("home", { data });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", (req, res) => {
  res.send("hello world");
});

module.exports = router;
