const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const routes = require('./routes');
const { error404Handler, errorHandler } = require('./middleware');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', routes);

app.use(error404Handler);
app.use(errorHandler);

module.exports = app;
