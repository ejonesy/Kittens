var connection = require("./connection.js");
//?? table or column name
//? single value

var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT ?? FROM ??";
    
    connection.query(queryString, [tableInput, callback], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  //creates a new row, inserts it into the database
  createOne: function(table, column, value, callback) {
    var queryString = "INSERT ?? FROM ?? WHERE ?? = ?";
    console.log(queryString);
    
    connection.query(queryString, [table, column, value, callback], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(table, value, condition, callback) {
    var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [table, value, condition, callback], function(
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;