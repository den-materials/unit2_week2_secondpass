const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.get('/', function(req, res) {
	res.send("Hello Bob");
});

app.listen(3000, function() {
	console.log("We're up on port 3000");
});