// DEPENDENCIES
// ====================================================
var mysql = require('mysql');

// CONNECT TO DATABASE
// ====================================================
var connection = mysql.createConnection({
  host     : 'localhost', 
  user     : 'root',
  password : 'Bacardi13',
  database : 'burgers_db'
})

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
});

// EXPORT CONNECTION
// ====================================================
module.exports = connection;