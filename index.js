var express = require ("express");
var untung = require ("beruntung");
var server = express();
server.use(express.static(__dirname + "/public"));
server.get("/untung", function(req, res){
  untung(function (err, results){
    res.send(results);
  });
});
server.listen(3000);
console.log ("running,", 3000);