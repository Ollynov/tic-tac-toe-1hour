var express = require('express');
var game = require('./gameplay.js');

var server = express();

server.get('/', function (req, res) {
  res.send('Lets play tic tac toe!');
});

game.gameplay();

server.listen(3000, function () {
  //console.log('Example app listening on port 3000!');
});