var express = require("express");
var kitten = require("../models/kitten.js");
var router = express.Router();

router.get("/", function(req, res) {
    kitten.selectAll(function(data) {
        var hbsObject = {
            kittens: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/kittens", function(req, res) {
    kitten.create([
        "kitten_name", "devoured"
    ], [
        req.body.kitten_name
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/kittens/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: ", condition);
    kitten.update({
        devoured: req.body.id
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
})

// router.delete("/api/kittens/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     kitten.delete(condition, function(result) {
//         if (result.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     })
// })

module.exports = router;