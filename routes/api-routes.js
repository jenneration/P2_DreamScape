const express = require("express");
const db = require("../models");
const router = express.Router();

let id;
// Render views
router.get("/", (req, res) => res.render("dash"));
router.get("/all", (req, res) => res.redirect("/api/dreams"));
router.get("/add", (req, res) => res.render("add"));
router.get("/update", (req, res) => res.render("update"));
router.get("/read", (req,res) => res.render("read"));






// #1 VIEW ALL dreams AFTER CREATED or NAV - OK
router.get("/api/dreams", (req, res) => {
    db.Dreams.findAll()
    .then((data) => {
     // console.log(data);
      const dreams = data.map((object) => {
        return object.dataValues;
      });
      console.log("#1 View Dreams All Works!")
      res.render('all', { dreams: JSON.parse(JSON.stringify(dreams))});
    })
    .catch((err) => console.log(err))
    });


// #2 CREATE a new dream - OK
router.post("/api/dreams", (req, res) => {
  console.log(req.body);
    db.Dreams.create(req.body)
    .then((dbDreams) => {
      console.log("#2 Create Dreams Works!")
      res.redirect("/all")
    })
    .catch(error => console.log(error));
  })

// #3 READ: get one dream by ID

// router.get("/api/read/:id", (req, res) => {
//   console.log("#3 HEy");
//     db.Dreams.findOne({
//       where: {
//         id: req.params.id,
//       },
//     })
//     .then((data) => {//res.json(data))
//     console.log("# 3 Found dream")
//     //console.log(data);
// console.log(data.dataValues);
//     const dream = JSON.stringify(data.dataValues);
//     console.log(`This is found dream ${dream}`);

//     res.render('read', { dream: JSON.parse(JSON.stringify(dream))});
//     console.log({ dream })
//     //const dream = data.map((object) => {
//      // return object.dataValues;
//     });
//     // res.redirect(`/api/read`);
//     // res.redirect("/read", { dream } )
    
//     .catch(error => console.log(error));
// })

// #3 READ ONE DREAM
// router.get("/api/read/:id", (req, res) => {
//   db.Dreams.findOne(
//     {
//       where: {
//         id: req.params.id,
//       },
//     })
//   .then((data) => {
//    // console.log(data);
//     const dream = data.dataValues;
//     console.log(dream)
//     res.redirect("/read", { dream: JSON.parse(JSON.stringify(dream))});
//   })
//   .catch((err) => console.log(err))
//   });


//PRE TEST ROUTE - data working + no console errors
router.get("/api/read/:id", (req, res) => {
  db.Dreams.findOne(
    {
      where: {
        id: req.params.id,
      },
    })
  .then((data) => {
   // console.log(data);
    const dream = data.dataValues;
    console.log(dream)
    res.render('read', { dream: JSON.parse(JSON.stringify(dream))});
   // res.render("read", {dream: dream});
  })
  .catch((err) => console.log(err))
  });






//TEST  
// router.get("/api/read/:id", (req, res) => {
//   db.Dreams.findOne(
//     {
//       where: {
//         id: req.params.id,
//       },
//     })
//   .then((data) => {
//    // console.log(data);
//     const dream = data.dataValues;
//     console.log(dream)
//     res.render('read', { dream: req.params.id});
//   })
//   .catch((err) => console.log(err))
//   });









 
  
  // #4 DELETE
  
  // router.delete("api/dreams/:id", (req, reqs) => {
  //   db.Dreams.destroy({
  //     where: {
  //       id: req.params.id,
  //     },
  //   })
  //   .then((dbDreams) => res.json(dbDreams));
  // })

module.exports = router;
