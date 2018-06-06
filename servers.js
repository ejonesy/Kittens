var orm = require("./config/orm.js");

orm.selectAll("kittens", function(result) {
    var data = result;
    console.log(data);
});

orm.createOne("kittens", "kitten_name", "devoured", "true", function(result) {
    var data = result;
    console.log(data);
});

orm.updateOne("kittens", "devoured", "true", function(result) {
    var data = result;
    console.log(data);
});