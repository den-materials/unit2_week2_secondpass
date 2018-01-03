const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/json_server');

let Person = require('./person');

Person.create({name: "Bob"}, function(err, person) {
	console.log(err);
	console.log(person);
	mongoose.disconnect();
});