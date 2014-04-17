var untung = require ("./lib/untung");
var express = require ("express");
var server = express();
server.use(express.static(__dirname + "/public"));
server.get("/untung", function(req, res){
  untung(function (err, results){
    res.send(results);
  });
});
server.listen(3000);