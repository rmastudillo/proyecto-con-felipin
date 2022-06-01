const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const db = require('../../../models');


const { User } = db;

/* req y res siempre se recive */
/* req contiene toda la info que viene desde el request */
/* res es lo que se envia como respuesta */
router.get("/", async (req, res) => {
  const user = await User.findAll({});
  if (!user) {
    res.status(400).json({ error: "No se encontraron usuarios" });
  } else {
    const result = user
    if (result) {

      res.status(200).json({ result: result });
    } else {
      res
        .status(400)
        .json({ error: "Aglo mal" });
    }
  }
});

/* Sacado de la actividad */
router.post("/login/", async (req, res) => {
  const user = await User.findOne({
    where: { username: req.body.username },
  });
  if (!user) {
    res.status(400).json({ error: "El usuario y la contraseña no coinciden" });
  } else {
    const result = bcrypt.compareSync(req.body.password, user.password);
    if (result) {
      const token = jwt.sign(
        {
          username: user.username,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "1800s",
        }
      );
      res.status(200).json({ token: token });
    } else {
      res
        .status(400)
        .json({ error: "El usuario y la contraseña no coinciden" });
    }
  }
});

router.post("/sign-up/", async (req, res) => {
  try {
    if (req.body.password === req.body.passwordConfirmation) {
      const existingUser = await User.findOne({
        where: { username: req.body.username },
      });
      console.log(existingUser, "gola");
      if (existingUser) {
        console.log("hola");
        res.status(400).json({ error: "Username en uso" });
      } else {
        /*         console.log("hola");
                const hashedPassword = await bcrypt.hash(
                  req.body.password,
                  SALT_ROUNDS
                );
                console.log("hola");  */
        /* Aca se crea el usuario */
        const user = await User.create({
          username: req.body.username,
          password: req.body.password,
          name: req.body.name,
          driver: req.body.driver,
          email: req.body.email,
        });
        res.status(201).json(user);
      }
    } else {
      res.status(400).json({ error: "Contraseñas no coinciden" });
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

/* Aqui exporto al router */
module.exports = router;