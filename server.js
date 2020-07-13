const express = require("express");
const exphbs = require("express-handlebars");
// const bodyParser = require('body-parser');
const routes = require("./controllers/burgers_controller");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// needs to be towards the bottom of page
app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});