const express = require("express");
const db = require("../models");
const router = express.Router();


router.get("/dash", (req, res) => res.render("dash"));
router.get("/all", (req, res) => res.redirect("/api/dreams"));
router.get("/add", (req, res) => res.render("add"));
router.get("/edit", (req, res) => res.render("edit"));
router.get("/read", (req, res) => res.render("read"));
router.get("/", (req, res) => res.render("landing"));


//ADD NEW DREAM
// router.put("/api/dreams/:id", (req, res) => {
//   console.log(req.body);
//   db.Dreams.update(req.body, {
//     where: {
//       id: req.params.id,
//     }
//   })
//     .then((data) => {
//       const updateddream = data.dataValues
//       console.log(updateddream)
//       console.log("#5 Update Dream Works!");
//       res.redirect("/all")
//     })
//     .catch(error => console.log(error));
// })


// ORIGINAL STATE
router.get("/api/dreams/dash", (req, res) => {


  db.Dreams.findAll({})
    .then((data) => {
      //console.log(data);
      let dreams = data.map((object) => {
        return object.dataValues;
      });

      console.log(dreams)
      console.log("Find All Dash")
      dreams = dreams.reverse();
      res.json(dreams);
    })
    .catch((err) => console.log(err));
});






//////////////////////////////////////////////



// #1 VIEW ALL dreams AFTER CREATED or NAV - OK
router.get("/api/dreams", (req, res) => {

  db.Dreams.findAll({})
    .then((data) => {
      console.log(data);
      let dreams = data.map((object) => {
        return object.dataValues;
      });
      console.log(dreams)
      dreams = dreams.reverse();
      res.render('all', { dreams: JSON.parse(JSON.stringify(dreams)) });
    })
    .catch((err) => console.log(err))
});

// // #2 CREATE a new dream - OK
router.post("/api/dreams", (req, res) => {
  console.log(req.body);
  db.Dreams.create(req.body)
    .then(() => {
      console.log("#2 Create Dreams Works!")
      res.redirect("/all")
    })
    .catch(error => console.log(error));
})

// #3 READ ONE DREAM
router.get("/api/read/:id", (req, res) => {
  db.Dreams.findOne(
    {
      where: {
        id: req.params.id,
      },
    })
    .then((data) => {
      const dream = data.dataValues;
      console.log("#4 Read 1 dream works")
      res.render("read", { dream: dream });
    })
    .catch((err) => console.log(err))
});


//#4 Redirect to edit/delete page
router.get("/api/edit/:id", (req, res) => {
  db.Dreams.findOne(
    {
      where: {
        id: req.params.id,
      },
    })
    .then((data) => {
      const dream = data.dataValues;
      console.log("#5 Prep for edit works!")
      res.render("edit", { dream: dream });
    })
    .catch((err) => console.log(err))
});

// #5 Update dream
router.put("/api/dreams/:id", (req, res) => {
  console.log(req.body);
  db.Dreams.update(req.body, {
    where: {
      id: req.params.id,
    }
  })
    .then(() => {
      console.log("#5 Update Dream Works!");
    })
    .catch(error => console.log(error));
})

//#6 DELETE
router.delete("/api/dreams/:id", (req, res) => {
  console.log("DELETED")
  db.Dreams.destroy(
    {
      where: {
        id: req.params.id
      }
    })
    .then((dbDreams) => res.json(dbDreams));
});

module.exports = router;

