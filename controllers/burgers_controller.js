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

router.post('/api/burgers', function(req, res) {
  burger.insert({
    burgerName: req.body.burger_name
  }, function(result) {
    res.json(result);
  })
});

router.put('/api/burgers', function(req, res) {

});