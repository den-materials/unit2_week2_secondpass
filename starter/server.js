const   express = require('express'), 
        app = express(), 
        PORT = process.env.PORT || 3000,
        router = require('./config/routes'),
        mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/idgafos'); 


app.set('views', './views');
app.engine('ejs', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.use('/', router)
app.listen(PORT, () => console.log(`alive on ${PORT}`));