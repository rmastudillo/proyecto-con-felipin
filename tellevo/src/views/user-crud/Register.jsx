import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm/* , SubmitHandler */ } from 'react-hook-form'
import "../../styles/LoginSetup.css"


export default function Register() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  /* register es para registrar los diferentes campos del formulario */
  /* handleSubmit me permite gestionar los submit del formulario */
  const { register, formState: { errors }, watch, handleSubmit } = useForm();
  // const [users, setUsers] = useState(USERS);
  /* Aquí gestiono que hago con los datos del formulario */
  const onSubmit = async function handleSubmit(event) {
    console.log(event);
    setLoading(true);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    };
    console.log(event);
    try {
      const ruta = 'http://localhost:9000/user/sign-up/';
      const response = await fetch(ruta, requestOptions);
      console.log(response);
      if (response.status !== 200) {
        const error = await response.text();
        throw new Error(error);
      }
      if (response.status === 201) {
        console.log('El usuario se creó correctamente');
        navigate('/');
        /* Con esta creo que podría hacerse que al logear vuelva
        a la página en la que estaba antes de apretar login
        pero habría que implementar en todas las paginas que reciba
        state:true y cambie según eso
        navigate(-1, {state: true});
        */
      }
      setMessage('El usuario fue creado existosamente ');
    } catch (error) {
      setMessage('El usuario no se pudo crear');
    } finally {
      setLoading(false);
    }

  };
  const isDriver = watch('conductor');
  const locations = [
    "Santiago",
    "Conchalí",
    "Huechuraba",
    "Independencia",
    "Quilicura",
    "Recoleta",
    "Renca",
    "Las Condes",
    "Lo Barnechea",
    "Providencia",
    "Vitacura",
    "La Reina",
    "Macul",
    "Ñuñoa",
    "Peñalolén",
    "La Florida",
    "La Granja",
    "El Bosque",
    "La Cisterna",
    "La Pintana",
    "San Ramón",
    "Lo Espejo",
    "Pedro Aguirre Cerda",
    "San Joaquín",
    "San Miguel",
    "Cerrillos",
    "Estación Central",
    "Maipú",
    "Cerro Navia",
    "Lo Prado",
    "Pudahuel",
    "Quinta Normal"
  ];

  // const userExists = (mail) => {
  //   return users.find((user) => user.mail === mail) ? true : false;
  // };

  /* const addUser = () => {
    const ids = users.map((user) => user.id);
    const maxID = Math.max(...ids);
    const newUser = {
      id: maxID + 1,
      name: watch('name'),
      mail: watch('email'),
      password: watch('password'),
      is_driver: watch('conductor')
    };
    setUsers([...users, newUser]);
    alert("Usuario creado correctamente")
  } */
  /*  */
  return (
    <div className="background-login">
      <div className="login-card-form">
        <div>
          <h1>Regístrate</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-box">
          <div>
            {/* ... register me deja registrar las casillas del formulario */}
            <input className='input-box' {...register(
              'username', {
              required: true,
              maxLength: 12
            })}
              placeholder="Nombre" />

          </div>
          <div >
            <input className='input-box' {...register(
              "email", {
              required: true,
              /* Acá reviso si el patron de email es mas o menos correcto */
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}
              placeholder="Correo electrónico" />
          </div>
          <div>
            <input className='input-box' {...register("password", {
              required: true,
              minLength: 8
            })} type="password" placeholder='Contraseña' />
          </div>
          <div>
            <input className='input-box' {...register("passwordConfirmation", {
              required: true,
              minLength: 8
            })} type="password" placeholder='Repita su contraseña' />
          </div>
          {/* Errores de inputes */}
          <div>
            <ul type="A" className='error-message'>
              {/* Faltantes */}
              {/* {errors.name?.type === 'required' &&
                <li><span> Error: falta el nombre</span></li>
              } */}

              {/* Errores de largo */}
              {/* {errors.name?.type === 'maxLength' &&
                <li><p> Nombre de usuario demasiado largo</p></li>
              }
              {errors.email.type === 'pattern' &&
                <li><p>El formato del email es incorrecto</p></li>
              }
              {errors.password.type === 'minLength' &&
                <li><p>La contraseña debe contener a lo menos 8 caracteres</p></li>
              } */}
              {/* Usuario Existente */}
              {/* {errors.email?.type === 'validate' &&
                <li><p>Este email ya está ocupado</p></li>
              } */}
            </ul>
          </div>
          <div >
            <label>¿Quieres llevar pasajeros?</label>
            <input type="checkbox"{...register('driver')} />

          </div>
          {isDriver && (
            <div className='driver-form'>
              <div><label>
                Selecciona tu comuna</label></div>
              <div>
                <select className='locations'>
                  {locations.map((location) => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <input className='input-box' id='submit-button' type="submit" value="Crear cuenta" />

        </ form >

        <div>
          <span>¿Ya tienes una cuenta?</span>
          <br />
          <Link to="/login" as="/login">

            Iniciar Sesión

          </Link>
        </div>
      </div >
    </div >
  );
};
