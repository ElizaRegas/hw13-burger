const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((results) => {
    res.render('index', { burgers: results });
  });
});

module.exports = router;