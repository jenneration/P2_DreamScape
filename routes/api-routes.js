const express = require("express");
const db = require("../models");
const router = express.Router();

// #1 READ/VIEW dreams - OK
router.get("/api/dreams", (req, res) => {
    db.Dreams.findAll()
    .then((data) => {
     // console.log(data);
      const dreams = data.map((object) => {
        return object.dataValues;
      });
      res.render('all', { dreams: JSON.parse(JSON.stringify(dreams))});
      // console.log("These are dreams" + (JSON.stringify(dreams)));
    })
    .catch((err) => console.log(err))
    });


// #2 CREATE a new dream - OK
router.post("/api/dreams", (req, res) => {
    console.log(req.body);
    db.Dreams.create(req.body)
    .then((dbDreams) => {
      console.log("After THEN");
      //Then REDIRECT to "all dreams page"
      res.redirect("/all")
    })
    .catch(error => console.log(error));
  })



  //-->   return device.dataValues;


// ********HELP***** #3 READ: get one dream by ID


// TRY 1 - GET BY ID
router.get("/api/dreams/:id", (req, res) => {
    db.Dreams.findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((dbDreams) => res.json(dbDreams))
    console.log("Found dream")
    res.render("read")
  });

 
  
  // #4 DELETE
  
  router.delete("api/dreams/:id", (req, reqs) => {
    db.Dreams.destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((dbDreams) => res.json(dbDreams));
  })

module.exports = router;
