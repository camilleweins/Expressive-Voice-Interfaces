var getPos = require('./getPos')
var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.get('/api/pos', function(req, res) {
	var words = req.query.words;
	var posWords = getPos(words)
	res.send(posWords)
});

app.use(express.static('public'))

app.listen(3000, function () {
  console.log('Listening on port 3000!')
});