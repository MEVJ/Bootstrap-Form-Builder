var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();




app.use(bodyParser.json());



app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
	//__dirname : It will resolve to your project folder.
})

app.use(express.static(path.join(__dirname)));





var server = app.listen(3000, function () {
	console.log('api listening on', server.address().port);

})
