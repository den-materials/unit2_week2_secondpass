const mongoose = require('mongoose')
const Practice = require('./models/practice')

const sample = {
    first: 'Firstthing',
    second: 5
}


mongoose.connect('mongodb://localhost/idgafos'); 


Practice.create(sample, function(err, practice){
  if (err){
    return console.log("Error:", err);
  }
  console.log("Created new model instance", practice._id)
  process.exit(); // we're all done! Exit the program.
})