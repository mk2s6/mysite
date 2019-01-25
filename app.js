const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');

require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const app = express();

app.engine('hbs', hbs({ extname: 'hbs', partialsDir: __dirname + '/views/partials/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/src')));
app.use(express.static(path.join(__dirname, '/dist')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
