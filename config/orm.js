var connection = require("./connection.js");
//?? table or column name
//? single value

// function printQuestionMarks(num) {
//     var arr = [];
  
//     for (var i = 0; i < num; i++) {
//       arr.push("?");
//     }
  
//     return arr.toString();
//   }
  
// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//     var arr = [];
  
//     // loop through the keys and push the key/value as a string int arr
//     for (var key in ob) {
//       var value = ob[key];
//       // check to skip hidden properties
//       if (Object.hasOwnProperty.call(ob, key)) {
//         // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//           value = "'" + value + "'";
//         }
//         // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//         // e.g. {sleepy: true} => ["sleepy=true"]
//         arr.push(key + "=" + value);
//       }
//     }
  
//     // translate array of strings to a single comma-separated string
//     return arr.toString();
//   }

var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT ?? FROM ??";
    
    connection.query(queryString, [tableInput, callback], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  //creates a new row, inserts it into the database
  create: function(table, column, value, callback) {
    var queryString = "INSERT ?? FROM ?? WHERE ?? = ?";
    console.log(queryString);
    
    connection.query(queryString, [table, column, value, callback], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  update: function(table, value, condition, callback) {
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