const express = require('express');
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const db = require('../../models');



// http://localhost:3000/publication/ (GET para obtener todas las publicaciones)
router.get('/', async (req, res) => {
  try {
    const publications = await db.publication.findAll();
    res.send({ publications: publications });
  } catch {
    res.status(400);
  }
});

// http://localhost:3000/publication/ (GET para obtener publicacion por id)
router.get('/:id', async (req, res) => {
  const publication = await db.publication.findOne({where: {id : req.params.id}});
  if (publication === null) {
    res.send({ mensaje: "No existe una publicación con id = " + req.params.id});
  }
  res.send({ publication: publication });
});

// http://localhost:3000/publication/ (POST para crear una publicacion)
router.post('/', async (req, res) => {
  try {
    const new_publication = await db.publication.create(req.body);
    res.send({ publication: new_publication });  
  } catch {
    res.status(400);
  }
});

// http://localhost:3000/publication/ (DELETE para eliminar una publicacion por id)
router.delete('/:id', async (req, res) => {
  const publication = await db.publication.findOne({where: {id : req.params.id}});
  if (publication === null) {
    res.send({ mensaje: "No existe una publicación con id = " + req.params.id});
  }
  await publication.destroy();
  res.send({ mensaje: "Publicación eliminada" });
});

/* Aqui exporto al router */
module.exports = router;