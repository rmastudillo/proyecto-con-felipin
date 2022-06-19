const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();

const db = require('../../models');


const { user } = db;


/* req y res siempre se recibe */
/* req contiene toda la info que viene desde el request */
/* res es lo que se envia como respuesta */

router.get("/", async (req, res) => {
  try {
    const userFound = await user.findAll({});
    const result = userFound
    if (result) {

      res.status(200).json({ result: result });
    } else {
      res
        .status(400)
        .json({ error: "Aglo mal" });
    }

  } catch (error) {

    res.status(400).json({ error: error.message });

  }

});

router.get("/:id", async (req, res) => {
  const userFound = await user.findOne({
    where: { id: req.params.id },
  });
  if (userFound) {
    const response = { name: userFound.name, username: userFound.username, email: userFound.email, driver: userFound.driver }
    res.status(200).json(response);
  }
  else {
    res
      .status(404)
      .json({ error: "Usuario no existente" })
  };

})

/* Sacado de la actividad */
router.post("/login/", async (req, res) => {
  /* 
    const authenticateUser = (user) => {
      // verifica si el usuario existe y lo retorna, sino retorna null
      // falla la autenticación pero no es tan importante sin bdd
      // const query = `SELECT * FROM users 
      //             WHERE email = ${user.email} AND password=${user.password};`;
      console.log("USER email: " + user.email);
      console.log("USER password: " + user.password);
      const found = User.filter((u) => {
        u.email == user.email && u.password == user.password
      });
      console.log("FOUND: " + found);
      return found.length > 0 ? found[0] : null;
    };
   */
  const userFound = await user.findOne({
    where: { email: req.body.email, password: req.body.password },
  });
  // quizás al loggear deba guardar al user logeado?
  const user = userFound;/* authenticateUser(userFound);
 */




  if (!user) {
    res.status(400).json({ error: "El usuario y la contraseña no coinciden" });
  } else {
    /* const result = bcrypt.compareSync(req.body.password, user.password); */
    const result = true;
    if (result) {
      /*       const token = jwt.sign(
              {
                username: user.username,
              },
              process.env.SECRET_KEY,
              {
                expiresIn: "1800s",
              }
            ); */
      res.status(200).json(user);
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
        const user = await user.create({
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

router.patch('/edit/:id', async (ctx, res) => {

  const user_id = ctx.params.id;

  const _user = await user.findOne({ where: { id: user_id } })
  const data = ctx.body
  const _email = data.email || _user.email;
  const _password = data.password || _user.password;
  const _driver = data.driver || _user.driver;
  const _name = data.name || _user.name;
  try {
    await _user.update({ email: _email, password: _password, driver: _driver, name: _name });
    res.body = _user;
    res.status(201).send({ updated: true });
  }
  catch (err) {
    res.status(401).send('No se modificó');
  }
});

router.delete('/:id', async (ctx, res) => {
  const user_id = ctx.params.id;

  const _user = await user.findOne({ where: { id: user_id } })

  console.log(_user)
  if (_user) {
    try {
      await _user.destroy();
      res.status(200).send({ error: 'Usuario eliminado' });
    }
    catch (err) {
      res.status(204).send({ error: 'Usuario no encontrado' });

    }
  } else {
    console.log(_user)
    res.status(200).send({ error: 'Usuario no encontrado' });
  };
}
);


/* Aqui exporto al router */
module.exports = router;