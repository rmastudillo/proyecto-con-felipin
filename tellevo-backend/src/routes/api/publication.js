const express = require('express');
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const db = require('../../models');



// http://localhost:3000/publication/ (GET para obtener todas las publicaciones)
router.get('/', async (req, res) => {
  const publications = await db.publication.findAll();
  console.log("Holaaaaaaaa", publications);
  res.send({ mensaje: publications });
})


/* Aqui exporto al router */
module.exports = router;