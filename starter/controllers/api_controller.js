const Practice = require('../models/practice')
const index = (req,res) => {
    Practice.find().then(practice =>{
        console.log(practice)
        res.json(practice)
    })
}


module.exports =  {index}