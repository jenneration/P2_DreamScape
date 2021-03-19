const express = require("express");
const handlebars = require("express-handlebars");
const db = require("./models");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

// Requiring passport as we've configured it
// var session = require("express-session");
// var passport = require("./config/passport");

// // TODO We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
// app.use(express.static("files"));

// Handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Require routes
const api = require("./routes/api-routes.js");
const html = require("./routes/html-routes.js");

// Middleware for routes
// app.use(html);
app.use(api);

//INITIAL TEST - routes
// app.get("/", (req, res) => res.send("INDEX TEST"));

//Sync sequelize models then start Express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
