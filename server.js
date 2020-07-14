// NPM packages
const express = require("express");
const exphbs = require("express-handlebars");
// External files
const routes = require("./controllers/burgers_controller");
// Define variables
const app = express();
const PORT = process.env.PORT || 8080;
// Middleware assignments
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Serve static pages
app.use(express.static("public"));
// Serve routes
app.use(routes);
// Listen to port
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});