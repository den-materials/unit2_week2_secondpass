var mongoose = require('mongoose');

var Practice = mongoose.Schema({
    first        : String,
    second       : Number,
});


module.exports = mongoose.model('Practice', Practice);