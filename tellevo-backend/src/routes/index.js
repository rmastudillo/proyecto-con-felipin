const express = require('express');

const router = express.Router();

/* ACA TENGO QUE IR IMPORTANDO LAS RUTAS DE LOS ARCHIVOS EN V1 */
const example = require('./api/example');
const user = require('./api/user');
const publication = require('./api/publication');
/* Cada vez que se llame a la ruta hello, se usaran la rutas de este archivo */
router.use('/example', example);
router.use('/user', user);
router.use('/publication', publication);

module.exports = router;