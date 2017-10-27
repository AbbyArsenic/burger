// DEPENDENCIES
// ====================================================
var express = require('express');
var router = express.Router();

// IMPORT BURGER MODEL
// ====================================================
var burger = require('../models/burger.js');

// CREATE ROUTES & LOGIC
// ====================================================
router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
  console.log(hbsObject);
  res.render('index', hbsObject);
  })
});

router.post('/api/burgers/', function(req, res) {

  burger.insert(req.body.name , function(result) {
    console.log("posted " + req.body.name);
    res.json(result);
  });

  // console.log(req.body)
  // res.send("Heyooooo");
});

router.put('/api/burgers/:id', function(req, res) {

    burger.update(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

module.exports = router;