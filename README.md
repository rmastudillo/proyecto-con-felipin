# En este proyecto haremos una página web desde cero usando react

## Setup

#1) crear app react:

- instalar nodejs desde la página
- npx create react-app "nombreapp"
- backend desde un template vacío

#2) instalando cosas backend:

- yarn add express morgan dotenv cors cookie-parser nodemon sequelize sequelize-cli pg pg-hstore jsonwebtoken bcrypt

- set up inicial back end completo
- yarn sequelize init
- nota: si sale un error en sequelize init es porque .sequelizerc está haciendo conflicto, borrar este archivo al correr el init y luego restaurarlo
- mover las carpetas creadas a src
- crear .sequelizerc si esque no estaba creado.
- setear las rutas como sale en el archivo inicial .sequelizerc init

#3) set up front

- yarn add dotenv react-hook-form react-icons react-router-dom styled-components

## Creación de Modelos y comandos de base de datos

- Crear base de datos: `CREATE DATABASE <nombre>`
- Borrar base de datos: `DROP DATABASE <nombre>`
- Crear Modelo:
  `yarn sequelize model:create --name user --attributes username:string,email:string,password:string,calification:integer,admin:boolean`

Luego de crear los modelos, es recomendable crear las repectivas asociaciones, estas van en `models`:

- ejemplo:
  <br>

  - Asociación hasMany de un usuario tiene N publicaciones:
    `this.hasMany(models.publication, { foreignKey: 'idUser', as: 'publication' });`
    <br>
  - Asociación BelongTo de una publicación que pertenece a un usuario:
    `this.belongsTo(models.user, { foreignKey: 'idUser', as: 'user' });`
    <br>

- Crear BDD: `yarn sequelize db:create`
- Borrar BDD: `yarn sequelize db:drop`
- Migrar modelos: `yarn sequelize db:migrate`
- Poblar BDD con seeds: `yarn sequelize db:seed:all`
