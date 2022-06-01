const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express()

const routes = require('./routes/index')
const { errorHandler, notFoundError } = require('./middlewares/error/errorHandler')
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* Aca la aplicacion usa las rutas */
app.use(routes);
/*  */

/* errores */
app.use(errorHandler);
app.use(notFoundError);
/*  */

module.exports = app;