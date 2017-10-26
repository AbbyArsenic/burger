// DEPENDENCIES
// ====================================================
var connection = require('connection.js');

// OBJECT RELATIONAL MAPPER
// ====================================================
var orm = {
  // SELECT * FROM burgers
  selectAll: function() {
    var queryString = 'SELECT * FROM burgers';
    connection.query(queryString, function(err, res) {
      console.log(res);
    });
  },
  // INSERT INTO burgers (burger_name) VALUES (burgerName)
  insertOne: function(burgerName) {
    var queryString = 'INSERT INTO burgers (burger_name) VALUES (?)';
    connection.query(queryString[burgerName], function(err, res) {
      console.log(res);
    });
  },
  // UPDATE burgers SET devoured = true WHERE id = ?
  updateOne: function(burgerID) {
    var queryString = 'UPDATE burgers SET devoured = true WHERE id = ?';
    connection.query(queryString[burgerID], function(err, res) {
      console.log(res);
    });
  }
};

module.exports = orm;
