const mongo = require("mongoose");

mongo.connect('mongodb://localhost/ecosport-ypf', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is connected!'))
    .catch(err => console.log(err));
