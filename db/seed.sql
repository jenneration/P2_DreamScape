-- TEST SEEDS: uncomment, paste in routes, turn sync force to false in server.js, and load each data set)


-- router.get("/add", (req, res) => {

--   const data = {
--       // title: "Bush Dogs",
--       // tags: "dog, black trees, full moon",
--       // description: "Under a blue moon, pressed into the bushes, the bush dogs waited"
      
--       // title: "Big Knife in the Mall",
--       // tags: "knife, chase",
--       // description: "I'm just standing in the middle of a closed mall. Lights are out or dimmed..."
     
     
--       title: "White and Bloodred",
--       tags: "blood, murder, full moon",
--       description: "Walking up to my apartment I see white splotches in the distance...then red splotches"

--   }
  
--   let { title, tags, description } = data;
  
--   //Create fields using table name
--   db.Dreams.create({
--       title,
--       tags,
--       description
--   })
--   .then(dreams => res.redirect("/"))
--   .catch(err => console.log(err));

-- });