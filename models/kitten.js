var orm = require("./config/orm.js");

var kitten = {
    all: function(callback) {
      orm.all("kittens", function(res) {
        callback(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, callback) {
      orm.create("kittens", cols, vals, function(res) {
        callback(res);
      });
    },
    update: function(objColVals, condition, callback) {
      orm.update("kittens", objColVals, condition, function(res) {
        callback(res);
      });
    },
    delete: function(condition, callback) {
      orm.delete("kittens", condition, function(res) {
        callback(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = kitten;
  