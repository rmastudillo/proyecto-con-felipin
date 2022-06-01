const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const db = require('../../../models');



/* req y res siempre se recive */
/* req contiene toda la info que viene desde el request */
/* res es lo que se envia como respuesta */
router.get('/', (req, res) => {
  res.send({ mensaje: 'Hola mundo' });
})


/* Aqui exporto al router */
module.exports = router;