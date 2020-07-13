const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((results) => {
    res.render('index', { burgers: results });
  });
});

router.post('/api/new-burger', (req, res) => {
  console.log("router test");
  console.log(req.body);
  burger.insertOne(req.body.burger_name, req.body.devoured, (result) => {
    console.log("result: " + result);
    res.json({ id: result.insertId });
  });
});



module.exports = router;