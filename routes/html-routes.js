const express = require("express");
const router = express.Router();
const db = require("../models");

//Routes

// RUN PRE-HANDLEBAR TESTS

// // 1. TEST Index route
router.get("/", (req, res) => res.render("dash"));
// router.get("/add", (req, res) => res.render("add"));
router.get("/all", (req, res) => res.render("all"));
router.get("/readupdate", (req, res) => res.render("readupdate"));

// // 2. TEST route to database -- confirmation = seeing empty dream table fields in console
// router.get("/all", (req, res) => {
//   db.Dream.findAll({}).then(console.log(res));
//   res.sendStatus(200);
// });

// // *** ADD TO DB **
// // 3. TEST HARD CODES AND ADDS TO THE DATABASE
router.get("/add", (req, res) => {
  const data = {
    title: "Stormy weather",
    body: "The blackest of blackest of clouds...",
    tags: "winds, rain, lightning",
  };

  let { title, body, tags } = data;
  // Insert into table
  db.Dream.create({
    title,
    body,
    tags,
  }).then((dream) => res.redirect("/all")); // change later to readupdate.html
  console.log(data);
});

module.exports = router;
