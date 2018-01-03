const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/json_server');

let Person = require('./person.js');

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html');
});

app.get('/api', function(req, res) {
	Person.findOne(function(err, person) {
		res.json(person);
	});
});

app.listen(3000, function() {
	console.log("We're up on port 3000");
});