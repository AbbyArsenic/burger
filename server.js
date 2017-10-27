// DEPENDENCIES
// ====================================================
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// INITIALIZA EXPRESS
// ====================================================
var app = express();
var PORT = process.env.PORT || 3000;

// DATA PARSING
// ====================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// SET HANDLEBARS
// ====================================================
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars'); 

// ROUTER
// ====================================================
var routes = require("./controllers/burgers_controller.js");
app.use('/', routes);

// LISTENER
// ====================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
