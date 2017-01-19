'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/whoami', function(req, res) {
	console.log(req.headers);
	console.log(req.connection.remoteAddress)

  });
app.listen(port);