const express = require('express');

const router = express.Router();

/* ACA TENGO QUE IR IMPORTANDO LAS RUTAS DE LOS ARCHIVOS EN V1 */
const hello = require('./api/v1/hello.routes');
const user = require('./api/v1/user');
/* Cada vez que se llame a la ruta hello, se usaran la rutas de este archivo */
router.use('/hello', hello);
router.use('/user', user);

module.exports = router;