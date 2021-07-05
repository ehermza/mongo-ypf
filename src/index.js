const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { urlencoded } = require('express');

const puerto = 3939;

// initialize
const app = express();
require('./database');

// Settings..
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || puerto);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// define static-files path
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log(`Server listen port ${puerto}`);
})