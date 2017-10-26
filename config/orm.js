// DEPENDENCIES
// ====================================================
var connection = require('./connection.js');

// OBJECT RELATIONAL MAPPER
// ====================================================
var orm = {
  // SELECT * FROM burgers
  selectAll: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput;
    connection.query(queryString, function(err, res) {
      cb(res);
    });
  },
  // INSERT INTO burgers (burger_name) VALUES (burgerName)
  insertOne: function(burgerName, cb) {
    var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
    connection.query(queryString[burgerName], function(err, res) {
      cb(res);
    });
  },
  // UPDATE burgers SET devoured = true WHERE id = ?
  updateOne: function(burgerID, cb) {
    var queryString = 'UPDATE burgers SET devoured = true WHERE id = ?';
    connection.query(queryString[burgerID], function(err, res) {
      cb(res);
    });
  }
};

module.exports = orm;
