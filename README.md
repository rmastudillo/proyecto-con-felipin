# En este proyecto haremos una página web desde cero usando react

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