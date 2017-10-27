// DEPENDENCIES
// ====================================================
var orm = require('../config/orm.js');

// BURGER FUNCTIONS INTERACT WITH DATABASE
// ====================================================
var burger = {
  all: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  }, 
  insert: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    })
  }, 
  update: function(burgerID, cb) {
    orm.updateOne(burgerID, function(res) {
      cb(res);
    })
  }
}

module.exports = burger;