const express = require("express");
const expbs = require("express-handlebars");
const db = require("./models");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;


///////////////////////PASSPORT 
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

//TODO We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

/////////////////////////////

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
// app.use(express.static("files"));

// Handlebars
const hbs = expbs.create({
  defaultLayout: "main",
});


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


//Require routes
const api = require("./routes/api-routes.js");
// const html = require("./routes/html-routes.js");
require("./routes/loginhtml-routes.js")(app);
app.use(require("./routes/loginapi-routes.js"));
app.use(api);
// app.use(html);


//Sync sequelize models then start Express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
