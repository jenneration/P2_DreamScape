const express = require("express");
const router = express.Router();
const db = require("../models");


//Routes

// RUN PRE-HANDLEBAR TESTS

// Render views
router.get("/", (req, res) => res.render("dash"));
router.get("/all", (req, res) => res.redirect("/api/dreams"));
router.get("/add", (req, res) => res.render("add"));
router.get("/update", (req, res) => res.render("update"));
router.get("/read", (req, res) => res.render("read"));




// #1 Get all dreams - OK
router.get("/api/dreams", (req, res) => 
db.Dreams.findAll()
.then((data) => {
 // console.log(data);
  const dreams = data.map((object) => {
    return object.dataValues;
  });
  res.render('all', { dreams: JSON.parse(JSON.stringify(dreams))});
  console.log("These are dreams " + JSON.parse(JSON.stringify(dreams)));
})
.catch((err) => console.log(err))
);


// #2 CREATE a new dream - OK
router.post("/api/dreams", (req, res) => {
  console.log(req.body);
  db.Dreams.create(req.body)
  .then((dbDreams) => {
    console.log("After THEN");
    //Redirect to "all page"
    // res.json(dbDreams)
    res.redirect("/all")
  })
  .catch(error => console.log(error));
})



// // GET ONE DREAM BY ID
// router.get("/api/dreams/:id", (req, res) => {
//   db.Dreams.findOne ({
//     where: {
//       id: req.params.id,
//     },
//   }).then((dbDreams) => res.json(dbDreams));
// });

module.exports = router;


  





//TEST

// router.get("/", (req, res) => 
// db.Dream.findAll() 
// .then(dreams => {
//   console.log(dreams);
//   res.sendStatus(200)
// })
// .catch(err => console.log(err)));


// // *** ADD TO DB **

// router.post("/add", (req, res) => {
  // const data = {
  //   title: "Red Snow",
  //   body: "The ground was soft and white except for one spot in the just visible distance",
  //   tags: "blood, colors",
  // };

  // let { title, body, tags } = req.body;
// let errors = [];

//Validate dream fields
// if(!title) {
//   errors.push({ text: "Please add a title"});
// }
// if(!tags) {
//   errors.push({ text: "Please add at least one tag/theme identifier"});
// }
// if(!body) {
//   errors.push({ text: "Please add a dream description"});
// };

//Check for errors 
// if (errors.length > 0) {
// res.render("add", {
//   errors,
//   title,
//   body,
//   tags
// })
// } else {
//   // Insert into table
//   db.Dream.create({
//     title,
//     body,
//     tags,
//   }).then((dream) => res.redirect("/read")); // change later to readupdate.html
//   console.log(data)
//   .catch(err => console.log(err));
// }

// Insert into table
// db.Dream.create({
//   title: req.body.title,
//   body: req.body.body,
//   tags: req.body.tags
// }).then((dream) => res.redirect("/update")); // change later to readupdate.html
// console.log(res)
// .catch(err => console.log(err));















