//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express configuration
var app = express();
var port = process.env.PORT || 3000;

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('public'));

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});
