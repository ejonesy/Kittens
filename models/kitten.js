var orm = require("../config/orm.js");

var kitten = {
    selectAll: function(tableInput, callback) {
        orm.selectAll("kittens", function(res) {
        callback(res);
      });
    },
    //The variables cols and vals are arrays.
    create: function(table, column, value, callback) {
      orm.create("kittens", "kitten_name", "devoured", function(res) {
        callback(res);
      });
    },
    update: function(table, value, condition, callback) {
      orm.update("kittens", "devoured", "true", function(res) {
        callback(res);
      });
    },
    delete: function(condition, callback) {
      orm.delete("kittens", "false", function(res) {
        callback(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = kitten;
  