const express = require("express");
const router = express.Router();
const Club = require("../models/club");

require("../config/keys");

router.get("/", async (req, res) => {
  try {
    const data = await Club.find();
    res.render("home", { data });
  } catch (error) {
    console.log(error);
  }
});

router.post("/add", (req, res) => {
  const { firstname, lastname, age } = req.body;

  console.log(firstname, lastname, age);
  const newClub = new Club({
    firstname: firstname,
    lastname: lastname,
    age: age,
  });
  newClub.save();
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  const requestedPostId = req.params.id;

  try {
    const data = await Club.findOneAndUpdate(
      { _id: requestedPostId },
      req.body,
      {
        new: true,
      }
    );
    res.render("edit", { club: data });
  } catch (error) {
    console.log(error);
  }
});

router.post("/edit/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Club.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Club.findByIdAndDelete({ _id: id }, req.body, {
      new: true,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
