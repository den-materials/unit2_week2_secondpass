const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PersonSchema = new Schema({
	name: String
});

let Person = mongoose.model('Person', PersonSchema);

module.exports = Person;